"""Regression: Demo never plays two videos or automatically starts the next one.

Run against the local preview with: python3 tests/test_demo_playback.py
The clip is generated under /tmp and never becomes published content.
"""
import asyncio
import subprocess
import tempfile
from pathlib import Path
from playwright.async_api import async_playwright


async def check():
    with tempfile.TemporaryDirectory(prefix="farm-assist-playback-") as directory:
        clip = Path(directory) / "test.webm"
        subprocess.run([
            "ffmpeg", "-f", "lavfi", "-i", "testsrc2=size=320x180:rate=24",
            "-t", "4", "-c:v", "libvpx", "-b:v", "200k", str(clip),
            "-y", "-loglevel", "error",
        ], check=True)
        async with async_playwright() as playwright:
            browser = await playwright.chromium.launch(headless=True)
            page = await browser.new_page(viewport={"width": 1280, "height": 1800})
            await page.route("**/playback-test.webm", lambda route: route.fulfill(
                path=str(clip), content_type="video/webm"))
            await page.goto("http://localhost:8080/explore")
            await page.wait_for_function("document.querySelector('.desktop-nav a') !== null")
            await page.wait_for_timeout(1500)
            await page.evaluate("""async () => {
                const {portal} = await import('/src/lib/portal-content.ts');
                const clip = await (await fetch('/playback-test.webm')).blob();
                const src = URL.createObjectURL(clip);
                portal.demo.main.src = src;
                portal.demo.videos[0].src = src;
            }""")
            await page.locator(".desktop-nav").get_by_role("link", name="Demo", exact=True).click()
            await page.get_by_role("button", name="Play Farm Assist — Product Demo", exact=True).click()
            await page.wait_for_function('document.querySelector("video")?.currentTime > 0.1')
            await page.get_by_role("button", name="Play The connected platform").click()
            await page.wait_for_function('document.querySelectorAll("video")[1]?.currentTime > 0.1')
            assert await page.evaluate('''() => {
                const videos = [...document.querySelectorAll('video')];
                return videos.filter(v => !v.paused).length === 1 && videos[0].paused;
            }'''), "Opening another video must pause the main video"
            await page.locator("video").nth(1).evaluate("v => {v.currentTime=v.duration-0.1;}")
            await page.wait_for_function('document.querySelectorAll("video")[1]?.ended')
            assert await page.evaluate("[...document.querySelectorAll('video')].every(v => v.paused)"), \
                "Ending a video must not automatically start another one"
            await page.keyboard.press("Escape")
            await page.wait_for_timeout(350)
            assert await page.locator("video").count() == 1, "Closing removes the modal media resource"
            assert await page.locator("video").evaluate("v => v.paused"), "Closing must not resume background playback"
            await browser.close()
    print("Demo playback rules passed")


if __name__ == "__main__":
    asyncio.run(check())