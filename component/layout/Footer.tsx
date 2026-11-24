"use client";

import { ArrowUp, CircleLetterC, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-background px-6 pt-20 pb-10 rounded-t-4xl">
      <div className="flex flex-col gap-10 mx-auto max-w-300">
        <div className="flex flex-col gap-2">
          <div className="text-accent text-sm font-semibold">
            CURRENTLY OPEN TO FREELANCE WORK
          </div>
          <Link
            href="#"
            className=" font-heading font-bold flex items-center text-5xl lg:text-9xl"
          >
            LET&apos;S TALK{" "}
            <span className="text-accent">
              <MoveRight size={50} />
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#"
            className="font-semibold border border-backgound text-background hover:bg-background hover:text-secondary transition-all py-4 px-6 rounded-full cursor-pointer"
          >
            Email me
          </a>
          <a
            href="#"
            className="font-semibold border border-backgound text-background hover:bg-background hover:text-secondary transition-all py-4 px-6 rounded-full cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-semibold border border-backgound text-background hover:bg-background hover:text-secondary transition-all py-4 px-6 rounded-full cursor-pointer"
          >
            GitHub
          </a>
        </div>

        <hr className="border border-code-border mt-8" />

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <CircleLetterC size={14} />
            2026 Mubarak
          </div>
          <button
            type="button"
            className="flex items-center gap-1 hover:text-accent transition-all cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
