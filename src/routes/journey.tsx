import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Boxes, Leaf, ShoppingBasket, Sprout, Users } from "lucide-react";
import { JourneyTimeline } from "@/components/portal/journey-timeline";
import { ClosingBand, SectionTitle } from "@/components/portal/site";
import { Button } from "@/components/ui/button";
import { portal } from "@/lib/portal-content";
import hero from "@/assets/farm-hero.webp";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Our Journey — Farm Assist" },
      {
        name: "description",
        content:
          "Follow Farm Assist from a farmer-focused idea toward a connected agricultural platform and ecosystem.",
      },
      { property: "og:title", content: "Our Journey — Farm Assist" },
      {
        property: "og:description",
        content:
          "The evolving Farm Assist story across product, farmers, customers and agricultural experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journey,
});

const growthAreas = [
  {
    title: "Product",
    description: "The digital agricultural platform, practical tools and connected services.",
    icon: Boxes,
  },
  {
    title: "Farmers",
    description: "Farmer-focused farm management, information and agricultural support.",
    icon: Sprout,
  },
  {
    title: "Customers",
    description: "Farm-product discovery, agricultural knowledge and connection with growers.",
    icon: ShoppingBasket,
  },
  {
    title: "Ecosystem",
    description: "Learning, farm experiences, experts and real-world agricultural connections.",
    icon: Users,
  },
] as const;

const futureGoals = [
  "More useful agricultural tools",
  "Better farmer support",
  "Improved customer access to farm products",
  "Stronger farmer-customer connections",
  "Agricultural learning and farm experiences",
  "A more connected agricultural ecosystem",
];

function Journey() {
  return (
    <main className="journey-page">
      <section className="journey-hero">
        <img
          src={hero}
          alt="Green agricultural fields representing the Farm Assist journey"
          width={1408}
          height={960}
          fetchPriority="high"
          decoding="async"
        />
        <div className="container journey-hero-content">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            04 / JOURNEY
          </span>
          <h1>Our Journey</h1>
          <p>
            From an idea to a connected agricultural ecosystem, Farm Assist is working to make
            farming simpler, connect farmers with opportunities, and bring customers closer to
            agriculture.
          </p>
          <Button asChild variant="portalLight" size="portal">
            <a href="#journey-timeline">
              Explore Our Timeline <ArrowDown />
            </a>
          </Button>
        </div>
      </section>

      <section className="section journey-timeline-section" id="journey-timeline">
        <div className="container journey-timeline-layout">
          <SectionTitle
            eyebrow="IDEA TO ECOSYSTEM"
            title="A journey still in motion."
            description="Dates remain pending until verified. Completed foundations, current work and planned stages are clearly separated below."
          />
          <JourneyTimeline milestones={portal.journeyMilestones} />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="FOUR AREAS OF GROWTH"
            title="One journey, connected across agriculture."
            description="Farm Assist is evolving across the product and the people and experiences around it."
          />
          <div className="journey-growth-grid">
            {growthAreas.map(({ title, description, icon: Icon }, index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container journey-today">
          <div>
            <SectionTitle
              eyebrow="WHERE WE ARE TODAY"
              title="Development, integration and preparation."
              description="Farm Assist is not presented as launched or widely adopted. The current focus is building and connecting the platform while preparing for practical learning."
            />
          </div>
          <div className="journey-status-list">
            <article>
              <span className="journey-status journey-status-completed">Completed</span>
              <h3>Foundation</h3>
              <p>Project idea, concept and initial platform direction.</p>
            </article>
            <article>
              <span className="journey-status journey-status-in-progress">In Progress</span>
              <h3>Product</h3>
              <p>Application development, features, integration and testing.</p>
            </article>
            <article>
              <span className="journey-status journey-status-preparing">Preparing</span>
              <h3>Field learning</h3>
              <p>Farmer introduction, pilot preparation and real-world feedback.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container journey-future">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-line" />
              FUTURE DIRECTION
            </span>
            <h2>What we are building toward.</h2>
            <p>
              These are goals for the evolving Farm Assist ecosystem, not claims about services
              already available.
            </p>
          </div>
          <ul>
            {futureGoals.map((goal) => (
              <li key={goal}>
                <Leaf aria-hidden="true" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingBand
        title="Explore where the journey is heading."
        description="See the connected platform or watch the available product showcase."
        links={[
          { label: "Explore the Platform", to: "/platform" },
          { label: "Watch the Demo", to: "/demo" },
        ]}
      />
    </main>
  );
}
