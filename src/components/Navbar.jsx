"use client";
import Link from "next/link";
import { brand, navbarLinks } from "@/constants";
import Navlink from "./Navlink";
import { useState } from "react";

function Navbar() {
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);
  return (
    <nav className="fixed w-screen px-2 z-50 top-2 left-0 md:left-1/2 md:-translate-x-1/2">
      <div className="container flex justify-between items-center gap-2 shadow-xl border px-4 py-3 pr-8 rounded-full  backdrop-blur-md">
        {/* logo */}
        <div className="flex items-center gap-2 -mt-1">
          <div className="w-8 h-8 ring ring-red-500/50 rotate-[15deg] bg-red-500 rounded-full rounded-ee-none" />
          <Link href="/" className="font-bold italic">
            <p className="text-2xl -mb-1">{brand.name}</p>
            <p className="hidden md:block text-[10px] text-normal">
              Blood donation{" "}
            </p>
          </Link>
        </div>

        {/* navlinks */}
        <ul className="hidden md:flex items-center gap-10">
          {navbarLinks.map((link) => (
            <Navlink key={link.id} {...link} />
          ))}
        </ul>

        <button
          onClick={() => setIsMobileNavShown(!isMobileNavShown)}
          className="block md:hidden p-2 rounded-full bg-red-500 ring-[6px] ring-red-500/50 "
        />

        {/* mobileNav */}
        {isMobileNavShown && (
          <ul className="md:hidden w-full fixed z-50 right-0 top-16 px-4 py-2 border rounded bg-white shadow-lg">
            {navbarLinks.map((link) => (
              <Navlink key={link.id} {...link} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
