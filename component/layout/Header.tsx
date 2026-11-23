"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center m-3 p-3 transition-all duration-300 rounded-md ${scrolled ? "bg-secondary text-background" : ""}`}
    >
      <h1 className="text-xl">
        mubarak <span className="text-primary">.</span>
      </h1>
      <button className="transition-colors hover:text-primary cursor-pointer">
        <Menu size={20} strokeWidth={3} />
      </button>
    </header>
  );
}
