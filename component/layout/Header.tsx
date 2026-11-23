"use client";

import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const linkRoutes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage =
        scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

      setScrolled(scrollPercentage >= 5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${dropdown ? "p-0" : "p-3"} transition-all duration-300 mx-auto max-w-300`}
    >
      <div
        className={`flex flex-col gap-10 w-full p-3 transition-all duration-300 ${scrolled ? "bg-secondary text-background" : ""} ${dropdown ? "p-6 bg-secondary text-background h-fit rounded-b-4xl" : "rounded-md"}`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl">
            mubarak <span className="text-primary">.</span>
          </h1>
          <button
            className="md:hidden transition-colors hover:text-primary cursor-pointer"
            onClick={() => setDropdown((prev) => !prev)}
          >
            <Menu size={20} strokeWidth={3} />
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {linkRoutes.map((route) => {
                return (
                  <li key={route.name}>
                    <Link href="#" className="font-semibold text-sm">
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {dropdown && (
          <div className="flex flex-col gap-6 md:hidden">
            <nav className="font-heading text-background">
              <ul>
                {linkRoutes.map((route, index) => {
                  return (
                    <li key={route.name} className="pb-2">
                      <Link
                        href={route.href}
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
                  );
                })}
              </ul>
            </nav>

            <Link
              href="#"
              className="flex items-center justify-center font-semibold bg-accent text-secondary w-full py-4 px-6 rounded-full cursor-pointer"
            >
              Let&apos;s Talk
              <MoveRight size={20} />
            </Link>

            <div className="flex justify-center items-center gap-6">
              <a href="" className="text-code-comment hover:text-background">
                LinkedIn
              </a>
              <a href="" className="text-code-comment hover:text-background">
                GitHub
              </a>
              <a href="" className="text-code-comment hover:text-background">
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
