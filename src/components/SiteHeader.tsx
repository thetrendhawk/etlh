import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/category/zero-waste-kitchen", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const mobileMenuId = "site-mobile-navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 bg-earth-100/90 backdrop-blur-md border-b border-earth-900/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight text-earth-900">
          Eco Tiny Living Hub
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-earth-900 hover:text-moss transition-colors"
              activeProps={{ className: "text-moss", "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden text-sm font-medium uppercase tracking-wider"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={mobileMenuId}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div
        id={mobileMenuId}
        hidden={!open}
        className="md:hidden border-t border-earth-900/5 bg-earth-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-2 text-base font-medium"
              activeProps={{ "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
