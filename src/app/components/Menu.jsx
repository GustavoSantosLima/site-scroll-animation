"use client";

import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-10">
      {!open && (
        <div onClick={() => setOpen(true)} className="menu-open">
          <svg viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}

      <nav className={`menu-nav ${open ? "menu-nav-open" : ""}`}>
        <div
          onClick={() => setOpen(false)}
          className="absolute flex top-3 right-6 cursor-pointer"
        >
          <span className="menu-close">X</span>
        </div>

        <ul className="flex flex-col gap-3">
          <li>
            <a
              href="#section-1"
              className="text-black text-4xl sm:text-5xl uppercase hover:text-yellow-500 transition-colors duration-300"
            >
              Cases
            </a>
          </li>
          <li>
            <a
              href="#section-2"
              className="text-black text-4xl sm:text-5xl uppercase hover:text-yellow-500 transition-colors duration-300"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#section-3"
              className="text-black text-4xl sm:text-5xl uppercase hover:text-yellow-500 transition-colors duration-300"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
