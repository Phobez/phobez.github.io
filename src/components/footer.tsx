const profiles = [
  { href: "https://www.linkedin.com/in/abia-herlianto/", label: "LinkedIn" },
  { href: "https://github.com/Phobez", label: "GitHub" },
  { href: "https://phobez.itch.io/", label: "itch.io" },
  { href: "mailto:abiaherlianto+1@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">© {new Date().getFullYear()} Abia Herlianto</p>
        <nav aria-label="Contact links" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
          {profiles.map((profile) => (
            <a className="text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={profile.href} key={profile.label} rel="noreferrer" target={profile.href.startsWith("http") ? "_blank" : undefined}>
              {profile.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
