import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abbhilash Ramakrishnan | Backend Engineer" },
      { name: "description", content: "Backend engineer building scalable, event-driven systems with Java, Spring Boot, Kafka, cloud platforms, and AI integrations." },
      { property: "og:title", content: "Abbhilash Ramakrishnan | Backend Engineer" },
      { property: "og:description", content: "Selected backend engineering work across distributed systems, cloud ingestion, authentication, and AI applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projectCards = [
  {
    label: "AI products",
    title: "Interactive video pipeline",
    copy: "Built an automated Speech-to-Text and LLM pipeline that creates timestamp-aware quizzes and tracks engagement, drop-off, and comprehension.",
    tags: ["Gemini AI", "Speech-to-Text", "Delivery"],
  },
  {
    label: "Data platform",
    title: "Ingestion at scale",
    copy: "Built multithreaded uploads to Azure Blob Storage and a Bronze–Silver–Gold data flow mapping validated inputs across 35 database tables.",
    tags: ["Azure", "Java", "35 tables"],
  },
  {
    label: "Core services",
    title: "Identity & access",
    copy: "Integrated multi-IdP SSO and engineered JWT authentication filters with role-based authorization, OpenAPI documentation, and EhCache.",
    tags: ["SSO", "JWT", "RBAC"],
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper font-sans text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="soft-signal absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full blur-3xl" />
        <div className="soft-mute absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full blur-3xl" />
        <div className="soft-signal absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-7 sm:px-6 sm:py-10">
        <header className="flex items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Back to top">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ink font-display text-sm font-semibold text-signal">AR</span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-semibold">Abbhilash Ramakrishnan</span>
              <span className="block text-xs text-mute">Backend Software Engineer</span>
            </span>
          </a>
          <span className="hidden text-sm text-mute sm:inline">Västerås, Sweden</span>
        </header>

        <main id="top">
          <section className="mt-14 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-12">
            <div className="reveal lg:col-span-8">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-mute">
                <span className="size-1.5 rounded-full bg-signal" />Event-driven systems · Java · Spring Boot
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
                Building <span className="text-mute">scalable</span><br />event-driven systems<br />with <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-1 h-4 -skew-x-3 bg-signal/70 sm:h-6" />
                  <span className="relative">signal</span>
                </span>, not noise.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">
                Three years building distributed backends, cloud ingestion, and AI-powered applications—turning complex requirements into dependable production systems.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#experience" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5">View experience</a>
                <a href="mailto:abbhilash14@gmail.com" className="max-w-full overflow-hidden text-ellipsis rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-signal">Email me</a>
              </div>
            </div>

            <aside className="frost grain rounded-2xl p-6 ring-1 ring-ink/10 lg:col-span-4" aria-label="Selected metrics">
              <p className="text-xs font-medium uppercase text-mute">Selected metrics</p>
              <div className="mt-5 space-y-5">
                <div><p className="font-display text-4xl font-semibold">99.9%</p><p className="mt-1 text-sm text-mute">MySQL query latency reduction, from 6s to 0.6ms</p></div>
                <div className="h-px bg-ink/10" />
                <div><p className="font-display text-4xl font-semibold">35</p><p className="mt-1 text-sm text-mute">tables mapped in a medallion ingestion pipeline</p></div>
                <div className="h-px bg-ink/10" />
                <div><p className="font-display text-4xl font-semibold">3 yrs</p><p className="mt-1 text-sm text-mute">building backend systems and integrations</p></div>
              </div>
            </aside>
          </section>

          <section id="experience" className="mt-20 scroll-mt-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold">Selected work</h2>
              <p className="text-xs uppercase text-mute">Jungroo AI Labs · 2022—2026</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {projectCards.map((project) => (
                <article key={project.title} className="frost grain rounded-2xl p-6 ring-1 ring-ink/10 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs font-medium text-mute">{project.label}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{project.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs">
                    {project.tags.map((tag, index) => <span key={tag} className={`rounded-full px-2.5 py-1 font-medium ${index === 0 ? "bg-signal/70" : "bg-ink/5"}`}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
            <article className="frost grain rounded-2xl p-6 ring-1 ring-ink/10 md:col-span-7">
              <p className="text-xs font-medium uppercase text-mute">Education</p>
              <h2 className="mt-3 font-display text-xl font-semibold">MSc, Software Engineering of Distributed Systems</h2>
              <p className="mt-1 text-sm text-mute">KTH Royal Institute of Technology · Present—August 2028</p>
              <p className="mt-5 font-display text-base font-semibold">Master of Computer Applications</p>
              <p className="mt-1 text-sm text-mute">PSG College of Technology · 2021—2023</p>
            </article>
            <article className="frost grain rounded-2xl p-6 ring-1 ring-ink/10 md:col-span-5">
              <p className="text-xs font-medium uppercase text-mute">Technical range</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Java", "Spring Boot", "Python", "TypeScript", "Kafka", "RabbitMQ", "PostgreSQL", "ClickHouse", "Azure", "AWS", "Redis", "MCP"].map((skill, index) => (
                  <span key={skill} className={`rounded-full px-2.5 py-1 font-medium ${index === 0 || index === 4 ? "bg-signal/70" : "bg-ink/5"}`}>{skill}</span>
                ))}
              </div>
            </article>
          </section>
        </main>

        <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-mute sm:flex-row sm:items-center">
          <p>Abbhilash Ramakrishnan — Backend Engineer, Västerås</p>
          <a href="mailto:abbhilash14@gmail.com" className="font-medium text-ink underline decoration-signal decoration-2 underline-offset-4">abbhilash14@gmail.com</a>
        </footer>
      </div>
    </div>
  );
}
