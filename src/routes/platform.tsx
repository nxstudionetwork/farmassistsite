import { createFileRoute } from "@tanstack/react-router";
import { Brain, Tractor, ShoppingBasket, Handshake, CloudSun, Plus, Monitor } from "lucide-react";
import { PageIntro, SectionTitle, VideoPanel, ClosingBand } from "@/components/portal/site";
import { portal } from "@/lib/portal-content";
import { BridgeSection, ScreenshotsSection } from "@/components/portal/portfolio";
import farmer from "@/assets/farm-field.webp";
export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Farm Assist Ecosystem" },
      {
        name: "description",
        content:
          "Explore the connected Farm Assist platform: intelligence, farm management, market, services and information.",
      },
      { property: "og:title", content: "Platform — Farm Assist Ecosystem" },
      {
        property: "og:description",
        content:
          "See the areas Farm Assist aims to bring into one connected agricultural ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Platform,
});
const modules = [
  {
    title: "Intelligence",
    icon: Brain,
    description: "Tools designed to make useful insight more accessible.",
    items: ["AI Assistant", "Analytics"],
  },
  {
    title: "Farm Management",
    icon: Tractor,
    description: "A connected view of day-to-day farm operations.",
    items: ["Crops", "Soil", "Irrigation", "Livestock", "Workers", "Farm Map", "Sensors"],
  },
  {
    title: "Market",
    icon: ShoppingBasket,
    description: "Agricultural market tools in the same ecosystem.",
    items: ["Market Prices", "Marketplace", "Input Store", "Wallet"],
  },
  {
    title: "Services",
    icon: Handshake,
    description: "Support and services relevant to the farmer journey.",
    items: ["Experts", "Government Schemes", "Agricultural Services"],
  },
  {
    title: "Information",
    icon: CloudSun,
    description: "Information and learning that can inform decisions.",
    items: ["Weather", "Agri News", "Learning"],
  },
];
function Platform() {
  return (
    <main>
      <PageIntro
        number="03"
        eyebrow="PLATFORM"
        title="What Does Farm Assist Do?"
        description="Farm Assist provides a digital agricultural application and connected ecosystem designed to bring useful farming information, services, market opportunities and customer connections together."
        image={farmer}
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="THE ECOSYSTEM"
            title="One platform. Many connected parts."
            description="Select a category to see the areas it is designed to bring together. Features are presented as part of the platform vision, not as claims of live availability."
          />
          <div className="ecosystem">
            <div className="eco-tile">
              <span>01</span>
              <strong>Intelligence</strong>
            </div>
            <div className="eco-tile eco-center">
              <Brain size={33} />
              <strong>
                FARM
                <br />
                ASSIST
              </strong>
              <span>THE CONNECTED CORE</span>
            </div>
            <div className="eco-tile">
              <span>02</span>
              <strong>Farm Management</strong>
            </div>
            <div className="eco-tile">
              <span>03</span>
              <strong>Market</strong>
            </div>
            <div className="eco-tile">
              <span>04</span>
              <strong>Services</strong>
            </div>
            <div className="eco-tile">
              <span>05</span>
              <strong>Information</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionTitle eyebrow="EXPLORE THE MODULES" title="What the platform brings together." />
          <div className="module-list">
            {modules.map(({ title, icon: Icon, description, items }) => (
              <details className="module-card" key={title}>
                <summary>
                  <Icon size={22} />
                  {title}
                  <Plus size={19} />
                </summary>
                <p>{description}</p>
                <div className="module-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <BridgeSection expanded />
      <ScreenshotsSection />
      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="SEE FARM ASSIST IN ACTION"
            title="A closer look at the platform."
          />
          <VideoPanel
            title="Farm Assist Platform"
            src={portal.videos.platform.src}
            poster={portal.videos.platform.poster}
          />
        </div>
      </section>
      <ClosingBand
        title="See the platform's path to the field."
        links={[
          { label: "Pilot Plan", to: "/pilot" },
          { label: "Watch Demo", to: "/demo" },
        ]}
      />
    </main>
  );
}
