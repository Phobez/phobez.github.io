import Link from "next/link";

import { ThemeControl } from "./theme-control";

const navigation = [
  { href: "/software", label: "Software" },
  { href: "/#disciplines", label: "Work" },
  { href: "/#selected-work", label: "Selected work" },
  { href: "/#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link className="font-mono text-sm font-semibold tracking-[-0.03em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href="/">
          ABIA HERLIANTO
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm md:flex">
          {navigation.map((item) => (
            <Link className="text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <ThemeControl />
        </nav>
        <details className="group md:hidden">
          <summary className="cursor-pointer list-none rounded px-2 py-1 text-sm text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Menu</summary>
          <div className="absolute right-5 top-14 grid min-w-48 gap-3 border border-rule bg-surface p-4 shadow-lg">
            {navigation.map((item) => (
              <Link className="text-sm text-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <ThemeControl />
          </div>
        </details>
      </div>
    </header>
  );
}
