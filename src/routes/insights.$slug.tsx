import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portal } from "@/lib/portal-content";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = portal.articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Farm Assist Explore` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — Farm Assist Explore` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Article not found — Farm Assist Explore" },
          { name: "description", content: "This Farm Assist article is unavailable." },
          { property: "og:title", content: "Article not found — Farm Assist Explore" },
          { property: "og:description", content: "This Farm Assist article is unavailable." },
          { name: "robots", content: "noindex" },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary" },
        ],
  }),
  component: Insight,
});

function Insight() {
  const article = Route.useLoaderData();
  return (
    <main>
      <article className="explore-detail container">
        <Button asChild variant="link">
          <Link to="/explore">
            <ArrowLeft /> Back to Explore
          </Link>
        </Button>
        <header>
          <span className="small-label">
            {article.category} / FOR {article.audience.toUpperCase()}
          </span>
          <h1>{article.title}</h1>
          <p className="explore-detail-lead">{article.summary}</p>
          <p className="form-note">
            Farm Assist editorial · Educational guide ·{" "}
            {Math.max(
              1,
              Math.ceil(
                article.sections
                  .map((s) => s.content)
                  .join(" ")
                  .split(/\s+/).length / 200,
              ),
            )}{" "}
            min read
          </p>
        </header>
        <img
          className="explore-detail-image"
          src={article.image}
          alt={article.imageAlt}
          width="1200"
          height="700"
        />
        {article.sections.map((s) => (
          <section className="explore-detail-section" key={s.title}>
            <h2>{s.title}</h2>
            <p>{s.content}</p>
          </section>
        ))}
        <aside className="explore-editorial-note">
          General educational information, not farm-specific advice. Growing practices and
          food-safety requirements vary by location; consult qualified local guidance for your
          circumstances.
        </aside>
        <Button asChild variant="portal" size="portal">
          <Link to="/explore">
            Continue exploring <ArrowLeft />
          </Link>
        </Button>
      </article>
    </main>
  );
}
