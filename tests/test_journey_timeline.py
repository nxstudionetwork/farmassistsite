"""Regression: Journey stages stay ordered, truthful and keyboard accessible."""
import asyncio
from playwright.async_api import async_playwright


async def check():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1800})
        await page.goto("http://localhost:8080/journey", wait_until="networkidle")
        titles = await page.locator(".journey-milestone-heading strong").all_text_contents()
        assert titles == [
            "The Farm Assist idea", "Defining the purpose", "Building the connected product",
            "Preparing the farmer experience", "Extending the customer experience",
            "Learning through real-world use", "Growing the agricultural ecosystem",
        ]
        statuses = await page.locator(".journey-milestone-toggle .journey-status").all_text_contents()
        assert statuses == ["Completed", "Completed", "In Progress", "Preparing", "In Progress", "Planned", "Planned"]
        toggle = page.locator(".journey-milestone-toggle").first
        await toggle.focus()
        await page.keyboard.press("Enter")
        assert await toggle.get_attribute("aria-expanded") == "true"
        assert await page.get_by_text("A verified founding date has not yet been supplied.").is_visible()
        await browser.close()
    print("Journey timeline rules passed")


if __name__ == "__main__":
    asyncio.run(check())