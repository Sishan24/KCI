import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/craft", label: "Our Craft" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/92 border-border text-foreground border-b backdrop-blur-md"
          : "text-ink-foreground bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="border-accent text-accent grid h-10 w-10 place-items-center rounded-full border font-display text-sm tracking-widest">
            KCI
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide">
              Khan Carpets
            </span>
            <span className="block text-[10px] tracking-luxe uppercase opacity-70">
              International
            </span>
          </span>
        </Link>


        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs tracking-luxe uppercase transition-colors [&.active]:text-accent hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground border px-5 py-2 text-xs tracking-luxe uppercase transition-colors"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="bg-background border-border border-t px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-border block border-b py-4 text-sm tracking-luxe uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
