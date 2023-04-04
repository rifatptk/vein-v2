"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navlink({ href, title }) {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`font-semibold hover:text-red-600 ${
          pathName === href && "text-red-500 border-b-2 border-red-500"
        }`}
      >
        {title}
      </Link>
    </li>
  );
}

export default Navlink;
