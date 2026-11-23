"use client";

import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const linkRoutes = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu if the screen grows to the desktop layout
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setDropdown(false);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${dropdown ? "p-0" : "p-3"} transition-all duration-300 mx-auto max-w-300`}
    >
      <div
        className={`flex flex-col w-full transition-all duration-300 ${scrolled ? "bg-secondary text-background" : ""} ${dropdown ? "p-6 bg-secondary text-background h-fit rounded-b-4xl" : "p-3 rounded-md"}`}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={() => setDropdown(false)}
            className="font-heading font-extrabold tracking-tighter text-xl"
          >
            mubarak <span className="text-primary">.</span>
          </Link>

          <button
            type="button"
            aria-label={dropdown ? "Close menu" : "Open menu"}
            aria-expanded={dropdown}
            aria-controls="mobile-menu"
            className="md:hidden transition-colors hover:text-primary cursor-pointer"
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span className="relative block size-5">
              <Menu
                size={20}
                strokeWidth={3}
                className={`absolute inset-0 transition-all duration-300 ${
                  dropdown ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={20}
                strokeWidth={3}
                className={`absolute inset-0 transition-all duration-300 ${
                  dropdown ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>

          <nav className="hidden md:block" aria-label="Main">
            <ul className="flex items-center gap-4">
              {linkRoutes.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="font-semibold text-sm">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile dropdown: always rendered, height + opacity animated */}
        <div
          id="mobile-menu"
          inert={!dropdown}
          aria-hidden={!dropdown}
          className={`grid md:hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
            dropdown
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-6 pt-10">
              <nav className="font-heading text-background" aria-label="Mobile">
                <ul>
                  {linkRoutes.map((route, index) => (
                    <li key={route.name} className="pb-2">
                      <Link
                        href={route.href}
                        onClick={() => setDropdown(false)}
                        className="flex justify-between items-center text-4xl font-semibold hover:text-accent"
                      >
                        {route.name}
                        <div className="font-mono text-xs text-code-comment">
                          0{index + 1}
                        </div>
                      </Link>

                      {linkRoutes.length > index + 1 && (
                        <hr className="border border-code-border mb-2" />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <Link
                href="/contact"
                onClick={() => setDropdown(false)}
                className="flex items-center justify-center font-semibold bg-accent text-secondary w-full py-4 px-6 rounded-full cursor-pointer"
              >
                Let&apos;s Talk
                <MoveRight size={20} aria-hidden />
              </Link>

              <div className="flex justify-center items-center gap-6">
                <a
                  href="https://linkedin.com/in/your-handle"
                  className="text-code-comment hover:text-background"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/your-handle"
                  className="text-code-comment hover:text-background"
                >
                  GitHub
                </a>
                <a
                  href="mailto:mubarakbolu150@gmail.com"
                  className="text-code-comment hover:text-background"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
