"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/myplan" },
  ];

  return (
    <nav className="border-b border-gray-800 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={35} height={35} />
          <span className="text-2xl font-oswald font-bold text-white uppercase tracking-wider">
            FitLog
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-(--primary)/20 text-(--primary)"
                    : "bg-transparent text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white py-1.5 px-3 rounded-lg bg-transparent hover:bg-(--primary)/10 transition-colors"
          >
            <span>Plan</span>
            <span className="bg-(--primary) border border-(--primary) text-black font-semibold w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white py-1.5 px-3 rounded-lg bg-transparent hover:bg-(--primary)/10 transition-colors"
          >
            <span>Saved</span>
            <span className="bg-transparent border border-gray-700 text-white font-semibold w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">
              0
            </span>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="text-white text-3xl focus:outline-hidden"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-70 bg-gray-950 border-l border-gray-800 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-oswald font-bold text-white uppercase tracking-wider">
              FitLog
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="text-white text-2xl focus:outline-hidden"
            >
              <HiX />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-4 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-(--primary)/20 text-(--primary)"
                      : "bg-transparent text-gray-300 hover:text-white hover:bg-(--primary)/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col gap-4">
          <Link
            href="/myplan"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-base text-gray-300 hover:text-white p-2 rounded-lg bg-transparent hover:bg-(--primary)/10 transition-colors"
          >
            <span>Plan</span>
            <span className="bg-(--primary) border border-(--primary) text-black font-semibold w-7 h-7 rounded-full inline-flex items-center justify-center text-xs">
              0
            </span>
          </Link>
          <Link
            href="/myplan"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between text-base text-gray-300 hover:text-white p-2 rounded-lg bg-transparent hover:bg-(--primary)/10 transition-colors"
          >
            <span>Saved</span>
            <span className="bg-transparent border border-gray-700 text-white font-semibold w-7 h-7 rounded-full inline-flex items-center justify-center text-xs">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;