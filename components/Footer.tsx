import { navItems } from "@/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb10 ">
      <div className="flex flex-col gap-y-4 mb-5 backdrop-blur-md bg-transparent p-6  w-full">
        <hr className="w-full border border-gray-300" />

        {/* Conteneur horizontal pour le logo et les liens */}
        <div className="flex justify-between items-center w-full">
          {/* Logo à gauche */}
          <a href="/">
            <img src="/logo1.png" alt="logo" className="w-32 h-auto" />
          </a>

          {/* Liens de navigation à droite */}
          <div className="flex justify-end items-center gap-x-8">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="relative dark:text-neutral-50 flex items-center text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              >
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mentions légales link */}
        <Link
          href="/mentions-legales"
          className="text-sm text-neutral-600 hover:text-neutral-500"
        >
          Mentions légales
        </Link>

        {/* Paragraphe centré en dessous */}
        <p className="text-sm text-center text-neutral-600">
          © 2024 InSitu Systems – Créé par Yoann
        </p>
      </div>
    </footer>
  );
};

export default Footer;
