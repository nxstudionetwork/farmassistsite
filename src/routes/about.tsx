import { createFileRoute } from "@tanstack/react-router";
import {
  Sprout,
  Link2,
  Lightbulb,
  Wheat,
  ClipboardList,
  Tractor,
  BookOpen,
  Store,
  MessageCircle,
  CloudSun,
  Users,
  Compass,
  ShoppingBasket,
  HeartHandshake,
  CircleDot,
} from "lucide-react";
import { PageIntro, SectionTitle, ClosingBand } from "@/components/portal/site";
import { BridgeSection } from "@/components/portal/portfolio";
import farmer from "@/assets/farm-field.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Farm Assist — The Idea & Vision" },
      {
        name: "description",
        content:
          "Farm Assist is a digital agricultural platform and ecosystem connecting farmers, technology, services, markets and customers — an initiative of IFX Group.",
      },
      { property: "og:title", content: "About Farm Assist — The Idea & Vision" },
      {
        property: "og:description",
        content: "A connected agricultural technology initiative developed as part of IFX Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const vision = [
  {
    icon: Sprout,
    title: "Useful technology",
    text: "Make technology accessible and genuinely useful for farmers.",
  },
  {
    icon: Link2,
    title: "A connected ecosystem",
    text: "Create a simpler and more connected agricultural ecosystem.",
  },
  {
    icon: Lightbulb,
    title: "Informed decisions",
    text: "Help farmers make better-informed decisions.",
  },
  {
    icon: ShoppingBasket,
    title: "Farm to customer",
    text: "Connect agricultural production with customers.",
  },
  {
    icon: HeartHandshake,
    title: "Stronger relationships",
    text: "Build a stronger relationship between farms, technology, services and consumers.",
  },
  {
    icon: Wheat,
    title: "The long term",
    text: "Support a future where agriculture becomes more connected, transparent and accessible.",
  },
];

const mission = [
  {
    icon: ClipboardList,
    title: "One platform",
    text: "Bring useful agricultural tools into one platform.",
  },
  { icon: Tractor, title: "Farm support", text: "Support farmers in managing their farms." },
  {
    icon: BookOpen,
    title: "Information & guidance",
    text: "Provide agricultural information and guidance.",
  },
  {
    icon: Link2,
    title: "Services & markets",
    text: "Connect farmers with services, markets and customers.",
  },
  {
    icon: Store,
    title: "Customer experience",
    text: "Create a customer-side experience for discovering and purchasing farm products.",
  },
  {
    icon: MessageCircle,
    title: "Better communication",
    text: "Encourage better communication between farmers and consumers.",
  },
  {
    icon: Lightbulb,
    title: "Simpler technology",
    text: "Make agricultural technology easier to understand and use.",
  },
];

const farmerSide = [
  "Farm Management",
  "Crop & Soil Support",
  "Irrigation",
  "Livestock",
  "Farm Tasks",
  "Market Information",
  "Agricultural Services",
  "Experts & Guidance",
  "Government Schemes & Information",
  "Weather & Agricultural Updates",
  "Learning",
  "Sensors & Connected Farm",
  "Marketplace",
  "Farm-to-Customer Opportunities",
];

const customerSide = [
  "Discovering farm products",
  "Organic & farm produce shopping",
  "Connecting with farmer-produced products",
  "Orders",
  "Wishlist",
  "Customer community",
  "Simple agricultural & growing guidance",
  "Indoor farming & growing guidance",
  "Learning where food comes from",
  "Connecting customers with the agricultural ecosystem",
];

const challenges = [
  "Agricultural information can be difficult to find",
  "Farmers often use multiple disconnected resources",
  "Access to useful services can be fragmented",
  "Farmers need simpler technology",
  "Customers have limited connection with the people and farms behind their food",
  "Agricultural products and opportunities can be difficult to connect across the ecosystem",
];

const provides = [
  { icon: ClipboardList, title: "Manage", text: "Farm, crops, plots, tasks and daily activities." },
  { icon: CloudSun, title: "Understand", text: "AI, soil, weather, crop and farm information." },
  {
    icon: Users,
    title: "Connect",
    text: "Experts, services, workers and the agricultural ecosystem.",
  },
  { icon: Compass, title: "Discover", text: "Markets, schemes, news and learning." },
  { icon: Store, title: "Trade", text: "Marketplace, farm products and customer connections." },
  { icon: Sprout, title: "Grow", text: "Better farming practices, knowledge and opportunities." },
];

function About() {
  return (
    <main>
      <PageIntro
        number="01"
        eyebrow="ABOUT"
        title="ABOUT FARM ASSIST."
        description="Farm Assist is a digital agricultural platform and service ecosystem connecting farmers, technology, agricultural services, markets and customers. The aim is simple: technology, information, services and connections that make the farming journey simpler."
        image={farmer}
      />
      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle
              eyebrow="WHAT IS FARM ASSIST?"
              title="Built around the everyday realities of farming."
            />
            <div className="body-copy">
              <p>
                Farm Assist is a digital agricultural platform and service ecosystem in development,
                designed to connect farmers, technology, services, markets and customers in one
                experience.
              </p>
              <p>
                It is designed with farmers in mind. Rather than asking them to navigate
                disconnected information and services, the goal is a more useful digital ecosystem
                that can evolve through testing and real-world feedback.
              </p>
            </div>
          </div>
          <div className="flow" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {[
              "Agricultural Challenges",
              "Disconnected Information & Services",
              "Connected Digital Ecosystem",
              "Farm Assist",
            ].map((s, i) => (
              <div className="flow-item" key={s}>
                <span>0{i + 1} </span>
                <strong>{s}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionTitle
            eyebrow="OUR VISION"
            title="A more connected, transparent and accessible future for agriculture."
            description="The long-term goal of Farm Assist is a farming world where technology, information and markets feel within reach for everyone involved."
          />
          <div className="about-vision-grid">
            {vision.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={24} strokeWidth={1.6} />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="OUR MISSION"
            title="Working toward the vision, one useful piece at a time."
            description="Farm Assist works toward its vision by building each of these into the platform."
          />
          <div className="grid-cards">
            {mission.map(({ icon: Icon, title, text }) => (
              <div className="info-card" key={title}>
                <span className="card-icon">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="THE FARM ASSIST ECOSYSTEM"
            title="Two sides, one ecosystem."
            description="Farm Assist serves the people who grow and the people who buy — with each side designed to feel like a genuine part of the same ecosystem."
          />
          <div className="feature-pair">
            <div className="feature-panel">
              <span className="small-label">FARMER SIDE</span>
              <h3>Everything a farm needs, in one place.</h3>
              <ul className="about-eco-list">
                {farmerSide.map((s) => (
                  <li key={s}>
                    <Sprout size={15} strokeWidth={1.8} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="feature-panel">
              <span className="small-label">CUSTOMER SIDE</span>
              <h3>Discover farm products and their story.</h3>
              <ul className="about-eco-list">
                {customerSide.map((s) => (
                  <li key={s}>
                    <ShoppingBasket size={15} strokeWidth={1.8} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BridgeSection />
      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle
              eyebrow="WHY FARM ASSIST?"
              title="One connected answer to scattered challenges."
            />
            <div className="body-copy">
              <p>
                These challenges are common across agriculture today, and no single tool addresses
                all of them.
              </p>
              <p>
                Farm Assist approaches them through one connected platform — bringing information,
                services, markets and people together instead of leaving them scattered across
                disconnected resources.
              </p>
            </div>
          </div>
          <ul className="about-why-list">
            {challenges.map((c) => (
              <li key={c}>
                <CircleDot size={16} strokeWidth={1.8} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="WHAT FARM ASSIST PROVIDES"
            title="Six areas, one platform."
            description="The platform's major areas, grouped rather than listed feature by feature."
          />
          <div className="grid-cards">
            {provides.map(({ icon: Icon, title, text }) => (
              <div className="info-card" key={title}>
                <span className="card-icon">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          <div className="status-feature">
            <div>
              <span className="small-label">OUR APPROACH</span>
              <h2>TECHNOLOGY + AGRICULTURE + PEOPLE</h2>
              <p>
                Farm Assist is not intended to make farming more complicated. Technology should
                simplify access to useful information, tools, services and connections.
              </p>
            </div>
            <blockquote className="about-approach-quote">
              “Technology should not make farming complicated. It should make the farmer's journey
              simpler.”
            </blockquote>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container split">
          <div>
            <span className="eyebrow">THE PEOPLE BEHIND THE INITIATIVE</span>
            <h2 style={{ fontSize: "clamp(42px,5vw,72px)", lineHeight: 1.08, margin: "20px 0" }}>
              FARM ASSIST
            </h2>
            <p style={{ fontSize: 22 }}>An initiative of IFX Group</p>
          </div>
          <div className="body-copy" style={{ color: "inherit" }}>
            <p>
              Farm Assist is being developed as part of IFX Group, not as a separate sponsored
              project. It is the group's agricultural technology initiative.
            </p>
            <p>
              Within IFX Group's broader ecosystem, Farm Assist focuses on agriculture and on the
              connection between farmers, technology, services and customers.
            </p>
          </div>
        </div>
      </section>
      <ClosingBand
        title="See how the idea moves forward."
        links={[
          { label: "The Journey", to: "/journey" },
          { label: "The Pilot", to: "/pilot" },
        ]}
      />
    </main>
  );
}
