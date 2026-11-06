import type { Metadata } from "next";

const games = [
  {
    title: "Pathfinders",
    format: "2D puzzle game for Android",
    role: "Producer / Project Manager, Programmer, Designer",
    summary: "Guide a group of explorers who move at once through an ancient temple, avoiding traps, removing obstacles, collecting treasure, and finding hidden relics.",
    highlights: ["Custom in-engine tile editor", "Context-aware tile assets", "Android release"],
    links: [
      { href: "https://play.google.com/store/apps/details?id=com.faberwerks.pathfinders", label: "Google Play" },
      { href: "https://github.com/faberwerks/pathfinders", label: "Source code" },
    ],
  },
  {
    title: "Melody of Nature",
    format: "Element-themed rhythm game",
    role: "Producer / Project Manager, Lead Programmer, Designer",
    summary: "A rhythm game built around Fire, Air, Water, and Earth, where the player matches notes to the correct element.",
    highlights: ["Note-spawning algorithm", "Custom in-engine level editor", "Playable web build"],
    links: [
      { href: "https://phobez.itch.io/melodyofnature", label: "Play on itch.io" },
      { href: "https://github.com/Phobez/melody-of-nature", label: "Source code" },
    ],
  },
  {
    title: "Valanthion",
    format: "2D fantasy action platformer",
    role: "Producer / Project Manager, Lead Programmer, Designer",
    summary: "An action platformer about the Valanthion, a chosen figure fighting to prevent an ancient race of demons known as the Vomori from taking over the world.",
    highlights: ["Action platforming", "Fantasy setting", "Playable web build"],
    links: [
      { href: "https://faberwerks.itch.io/valanthion", label: "Play on itch.io" },
      { href: "https://github.com/faberwerks/valanthion", label: "Source code" },
    ],
  },
  {
    title: "Go Goita!",
    format: "Traditional-game adaptation",
    role: "Producer / Project Manager, Programmer, Designer",
    summary: "A web adaptation of Goita (ごいた), a traditional game from Noto, Ishikawa, made with Cocos Creator for the Jawara Game Hago competition.",
    highlights: ["Cocos Creator", "Web compatibility", "Traditional game adaptation"],
    links: [
      { href: "https://gogoita.github.io", label: "Play the alpha" },
      { href: "https://github.com/phobez/go-goita", label: "Source code" },
    ],
  },
];

const capabilities = [
  {
    title: "Design and direction",
    items: ["Game design and player experience", "Project management and production", "Writing, lore, and narrative design"],
  },
  {
    title: "Implementation",
    items: ["Unity and Cocos Creator", "Gameplay systems and algorithms", "In-engine tools and level editors"],
  },
  {
    title: "Creative practice",
    items: ["2D game development", "Mobile and web deployment", "Collaboration across multidisciplinary roles"],
  },
];

export const metadata: Metadata = {
  title: "Game Development | Abia Herlianto",
  description: "Game development projects, playable prototypes, and design work by Abia Herlianto.",
};

export default function GamesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">02 / Game development</p>
        <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl">Designing systems that invite players in.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">From educational mobile games to strategy, rhythm, and action experiences, these projects explore gameplay through design, programming, and production.</p>
        <a className="mt-10 inline-block rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas" href="#games">Explore the games</a>
      </section>

      <section aria-labelledby="featured-heading" className="border-y border-rule bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_2fr] lg:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Featured game</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em]" id="featured-heading">Learning through play</h2>
          </div>
          <article className="border-l border-rule pl-6 sm:pl-8">
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              <span>Mobile game</span>
              <span>Bachelor&apos;s thesis project</span>
            </div>
            <h3 className="mt-8 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.045em]">Forlorn: An English Language Learning Mobile Game</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-ink">Producer / Project Manager, Programmer, Designer, Writer</p>
            <p className="mt-5 max-w-2xl leading-7 text-muted">An English-learning mobile game for Indonesian speakers with B1-level English, designed to teach B2-level English using the Input Hypothesis and Comprehensible Output Hypothesis. It was created as a bachelor&apos;s thesis project and received an A.</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              <a className="border-b border-accent pb-1 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://play.google.com/store/apps/details?id=com.FullSteam.Forlorn" rel="noreferrer" target="_blank">View on Google Play <span aria-hidden="true">↗</span></a>
              <a className="border-b border-accent pb-1 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="https://github.com/full-steam/forlorn" rel="noreferrer" target="_blank">View source code <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="games-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28" id="games">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Game collection</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl" id="games-heading">Playable systems and prototypes.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">A selection of published games, competition work, and web-playable prototypes.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {games.map((game) => (
            <article className="flex flex-col border border-rule bg-surface p-6 sm:p-8" key={game.title}>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{game.format}</p>
              <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">{game.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-ink">{game.role}</p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{game.summary}</p>
              <ul aria-label={`${game.title} highlights`} className="mt-7 flex flex-wrap gap-2">
                {game.highlights.map((highlight) => <li className="border border-rule px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted" key={highlight}>{highlight}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                {game.links.map((link) => <a className="border-b border-accent pb-1 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={link.href} key={link.label} rel="noreferrer" target="_blank">{link.label} <span aria-hidden="true">↗</span></a>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Capabilities</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl" id="capabilities-heading">From concept to playable build.</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
            {capabilities.map((group) => (
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

      <section aria-labelledby="worlds-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="border border-rule p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Related worlds</p>
          <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] sm:text-3xl" id="worlds-heading">The worlds behind the games.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">A dedicated worldbuilding collection is in development. It will connect fictional settings, languages, history, and lore to relevant game projects without treating them as a separate afterthought.</p>
        </div>
      </section>
    </>
  );
}
