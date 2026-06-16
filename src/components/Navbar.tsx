import { useEffect, useState } from "react";
import { FaLinkedin, FaNpm } from "react-icons/fa6";
import { navLinks, profile } from "../data/portfolio";

const socialLinks = [
  { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: profile.npm, label: "npm", icon: FaNpm },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div
        className={`pointer-events-auto relative mx-auto max-w-6xl overflow-hidden transition-all duration-500 ease-out ${
          scrolled
            ? `glass-nav px-3 py-2 md:px-4 md:py-2.5 ${menuOpen ? "rounded-2xl" : "rounded-full"}`
            : "rounded-2xl border border-transparent bg-transparent px-2 py-2 shadow-none backdrop-blur-0"
        }`}
      >
        <div className="relative z-10 flex items-center justify-between gap-3">
          <a href="#" className="flex min-w-0 items-center gap-2.5 md:gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-500 md:h-10 md:w-10 ${
                scrolled
                  ? "border border-white/20 bg-white/10 text-white"
                  : "border border-white/15 bg-white/5 text-white"
              }`}
            >
              K
            </span>
            <span
              className={`truncate text-sm font-semibold tracking-tight transition-opacity duration-500 ${
                scrolled ? "hidden sm:inline" : "inline"
              }`}
            >
              Kishan <span className="text-neutral-400">Dharajiya</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white xl:px-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2">
            <div
              className={`hidden items-center gap-1 transition-all duration-500 md:flex ${
                scrolled ? "opacity-100" : "opacity-80"
              }`}
            >
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full p-2.5 text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <button
              type="button"
              className={`rounded-full border px-3 py-2 text-sm transition-all duration-500 lg:hidden ${
                scrolled
                  ? "border-white/15 bg-white/5 text-neutral-200 hover:bg-white/10"
                  : "border-white/10 bg-white/5 text-neutral-300"
              }`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="relative z-10 border-t border-white/10 px-2 pb-2 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
