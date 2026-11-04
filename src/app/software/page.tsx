import type { Metadata } from "next";

const projects = [
  {
    title: "Expenser Lite",
    year: "2021",
    role: "Solo Developer",
    summary: "A lightweight Android app for managing and organising personal expenses, created after a month of independent Android-development training.",
    technologies: ["Kotlin", "Android Studio", "Back4App"],
    link: "https://play.google.com/store/apps/details?id=com.phobez.expenserlite",
    linkLabel: "View on Google Play",
  },
  {
    title: "CES Manager",
    year: "2020",
    role: "Project Manager, Backend Programmer, Designer",
    summary: "An Electron application that manages the virtual economy of ClanCraft, a 7GCraft sub-server, and automates seasonal financial calculations across dozens of in-game kingdoms and states.",
    technologies: ["Electron.js", "Node.js", "JavaScript"],
    link: "https://github.com/7gcraft/ces",
    linkLabel: "View source code",
  },
  {
    title: "Nanuda",
    year: "2019",
    role: "Project Manager, Programmer",
    summary: "An Android app to manage, organise, and split group expenses, created for a Software Engineering course at Hanyang University.",
    technologies: ["Java", "Android Studio", "Parse", "Back4App"],
    link: "https://github.com/phobez/nanuda",
    linkLabel: "View source code",
  },
];

const expertise = [
  {
    title: "Application development",
    items: ["Android development with Kotlin and Android Studio", "Backend development with Node.js and Express.js", "Desktop applications with Electron.js"],
  },
  {
    title: "Data and systems",
    items: ["SQL and MongoDB", "Backend-as-a-service workflows with Back4App and Parse", "Natural language processing with Python"],
  },
  {
    title: "Engineering practice",
    items: ["Project planning and technical design", "Research-led problem solving", "Working across game, mobile, web, and desktop contexts"],
  },
];

export const metadata: Metadata = {
  title: "Software Engineering | Abia Herlianto",
  description: "Software engineering, Android, backend, desktop, and language-technology work by Abia Herlianto.",
};

export default function SoftwarePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">01 / Software engineering</p>
        <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl">Engineering practical systems with care and curiosity.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">From Android and backend development to desktop tools and language technology, this work combines technical implementation with a focus on the people and processes a system supports.</p>
        <a className="mt-10 inline-block rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas" href="#projects">View engineering work</a>
      </section>

      <section aria-labelledby="featured-heading" className="border-y border-rule bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_2fr] lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Featured work</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em]" id="featured-heading">Language technology research</h2>
          </div>
          <article className="border-l border-rule pl-6 sm:pl-8">
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              <span>2024</span>
              <span>Master&apos;s thesis</span>
              <span>Author &amp; Researcher</span>
            </div>
            <h3 className="mt-8 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.045em]">Inducing Multiple Bilingual Dictionaries by Reusing Hub Language Encoders</h3>
            <p className="mt-5 max-w-2xl leading-7 text-muted">Research into improving automatic bilingual dictionary creation for endangered Indonesian ethnic languages by reusing a hub-language encoder. The work improved the existing process, combining dataset size and language similarity factors, by up to 1.75%.</p>
            <a className="mt-7 inline-block border-b border-accent pb-1 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://drive.google.com/file/d/1-OmaPA8KxD_51lEM37FHCv5RMRZARc4l/view?usp=sharing" rel="noreferrer" target="_blank">Read the thesis <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28" id="projects">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Project collection</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl" id="projects-heading">Applications and tools.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">Selected work across Android, desktop, and application development.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article className="flex flex-col border border-rule bg-surface p-6 sm:p-7" key={project.title}>
              <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                <span>{project.year}</span>
                <span>Software</span>
              </div>
              <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">{project.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-ink">{project.role}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{project.summary}</p>
              <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => <li className="border border-rule px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted" key={technology}>{technology}</li>)}
              </ul>
              <a className="mt-8 inline-block w-fit border-b border-accent pb-1 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={project.link} rel="noreferrer" target="_blank">{project.linkLabel} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="expertise-heading" className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Technical expertise</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl" id="expertise-heading">A cross-platform toolkit.</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
            {expertise.map((group) => (
              <section className="bg-surface p-6 sm:p-8" key={group.title}>
                <h3 className="text-lg font-medium tracking-[-0.03em]">{group.title}</h3>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-muted">
                  {group.items.map((item) => <li className="border-l border-accent pl-3" key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="border border-rule p-7 sm:flex sm:items-end sm:justify-between sm:gap-8 sm:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Collaboration</p>
            <h2 className="mt-3 max-w-xl text-2xl font-medium tracking-[-0.04em] sm:text-3xl">Interested in discussing an engineering project?</h2>
          </div>
          <a className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:mt-0" href="mailto:abiaherlianto+1@gmail.com">Get in touch</a>
        </div>
      </section>
    </>
  );
}
