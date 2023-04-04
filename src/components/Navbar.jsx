import React from "react";
import Link from "next/link";
import { brand, navbarLinks } from "@/constants";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <nav className="container flex justify-between items-center gap-2 shadow-xl border px-4 py-3 pr-8 rounded-full fixed z-50 top-2 left-1/2 -translate-x-1/2 backdrop-blur-md">
      {/* logo */}
      <div className="flex items-center gap-2 -mt-1">
        <div className="w-8 h-8 ring ring-red-500/50 rotate-[15deg] bg-red-500 rounded-full rounded-ee-none" />
        <Link href="/" className="font-bold italic">
          <p className="text-2xl -mb-1">{brand.name}</p>
          <p className="text-[10px] text-normal">Blood donation </p>
        </Link>
      </div>

      {/* navlinks */}
      <ul className="flex items-center gap-5 md:gap-10">
        {navbarLinks.map((link) => (
          <Navlink key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
