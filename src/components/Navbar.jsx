import React from "react";
import Link from "next/link";
import { brand, navbarLinks } from "@/constants";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <nav className="container flex justify-between items-center gap-2 shadow-xl border px-4 py-3 pr-8 rounded-full fixed top-2 left-1/2 -translate-x-1/2 backdrop-blur-md">
      {/* logo */}
      <div className="flex items-end gap-1">
        <div className="w-8 h-8 bg-red-500 rounded-full rounded-ee-none " />
        <Link href="/" className="font-bold text-xl italic">
          {brand.name}
        </Link>
      </div>

      {/* navlinks */}
      <ul className="flex items-center gap-10">
        {navbarLinks.map((link) => (
          <Navlink key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
