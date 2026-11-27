"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", color: "hover:text-cyan-400", active: "text-cyan-400" },
    { href: "/about", label: "About", color: "hover:text-violet-400", active: "text-violet-400" },
    { href: "/case-studies", label: "Case studies", color: "hover:text-pink-400", active: "text-pink-400" },
    { href: "/projects", label: "Projects", color: "hover:text-amber-400", active: "text-amber-400" },
  ];

  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center text-sm font-figtree font-light z-50 relative">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain rounded-md"
        />
      </Link>
      <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 sm:gap-x-8 backdrop-blur-md bg-background/50 sm:px-6 py-2 ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors ${
              pathname === link.href ? link.active : `text-neutral-500 ${link.color}`
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

