import Link from "next/link";

const disciplines = [
  { number: "01", title: "Software Engineering", description: "Thoughtful applications, technical systems, and research-led work.", href: "#selected-work" },
  { number: "02", title: "Game Development", description: "Playable systems shaped through design, implementation, and iteration.", href: "#selected-work" },
  { number: "03", title: "Worldbuilding", description: "Fictional settings, languages, and narratives currently being organised.", href: "#about" },
];

const work = [
  { title: "Inducing Multiple Bilingual Dictionaries", category: "Research", year: "2024", summary: "Master's thesis research into improving automatic bilingual dictionary creation for endangered Indonesian ethnic languages.", tags: ["NLP", "Python", "Research"] },
  { title: "Forlorn", category: "Game Development", year: "2021", summary: "An English-language learning mobile game created as a bachelor's thesis project.", tags: ["Mobile", "Game Design", "Unity"], href: "https://github.com/full-steam/forlorn" },
  { title: "Expenser Lite", category: "Software Engineering", year: "2021", summary: "A lightweight Android application for managing personal expenses, built as an independent Android-development training project.", tags: ["Kotlin", "Android", "Back4App"], href: "https://play.google.com/store/apps/details?id=com.phobez.expenserlite" },
  { title: "Valanthion", category: "Game Development", year: "2019", summary: "A 2D fantasy action platformer created through a multidisciplinary game-development role.", tags: ["Unity", "Game Design", "Programming"], href: "https://faberwerks.itch.io/valanthion" },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Software engineering / game development / worldbuilding</p>
        <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Building systems. Creating experiences. Imagining worlds.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">Abia Herlianto is a software engineer and game developer interested in technical craft, interactive experiences, and the worlds around them.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas" href="#selected-work">Explore my work</Link>
          <Link className="rounded-full border border-rule px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="#about">About me</Link>
        </div>
      </section>

      <section aria-labelledby="disciplines-heading" className="border-y border-rule bg-surface" id="disciplines">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="disciplines-heading" className="text-2xl font-medium tracking-[-0.04em]">Three connected disciplines</h2>
            <span className="hidden font-mono text-xs uppercase tracking-[0.14em] text-muted sm:block">Explore</span>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
            {disciplines.map((discipline) => (
              <Link className="group bg-surface p-6 transition-colors hover:bg-canvas focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-8" href={discipline.href} key={discipline.number}>
                <p className="font-mono text-xs tracking-[0.14em] text-accent">{discipline.number}</p>
                <h3 className="mt-14 text-xl font-medium tracking-[-0.035em]">{discipline.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{discipline.description}</p>
                <span className="mt-8 inline-block text-sm font-medium group-hover:text-accent">View section <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="selected-work-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28" id="selected-work">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Selected work</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl" id="selected-work-heading">A focused selection of projects.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">A work-first overview of software, research, and game-development projects.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {work.map((project) => {
            const content = <><div className="flex justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-muted"><span>{project.category}</span><span>{project.year}</span></div><h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">{project.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted">{project.summary}</p><ul aria-label={`${project.title} technologies`} className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <li className="border border-rule px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted" key={tag}>{tag}</li>)}</ul></>;
            return project.href ? <a className="border border-rule bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-8" href={project.href} key={project.title} rel="noreferrer" target="_blank">{content}</a> : <article className="border border-rule bg-surface p-6 sm:p-8" key={project.title}>{content}</article>;
          })}
        </div>
      </section>

      <section aria-labelledby="about-heading" className="border-t border-rule bg-surface" id="about">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_2fr] lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">About</p>
          <div>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl" id="about-heading">A multidisciplinary practice grounded in learning through challenge.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">With academic experience in computer science and engineering, Abia has worked across backend and Android development, game projects, and language-focused research.</p>
            <Link className="mt-8 inline-block border-b border-accent pb-1 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="mailto:abiaherlianto+1@gmail.com">Get in touch <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
