"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const rightNavigation = [
  { name: "Kids", href: "/kids" },
  { name: "Accessories", href: "/accessories" },
  { name: "Sign In", href: "/signin" },
];

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 text-white z-50">
      <nav className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Featured Button */}
          <Link
            href="/featured"
            className="nav-button text-white font-medium hover:text-white pl-[2px] absolute left-0"
          >
            Featured
          </Link>

          {/* Left Navigation */}
          <div className="hidden sm:flex items-center space-x-8 pl-24">
            <Link href="/men" className="nav-button text-gray-300 hover:text-white px-2 py-2">
              Men
            </Link>
            <Link href="/women" className="nav-button text-gray-300 hover:text-white px-2 py-2">
              Women
            </Link>
          </div>

          {/* Center Logo (Image) */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <Image 
              src="/logo_ad.png" 
              alt="Absolutely Desi Logo"
              width={250} // Adjust size as needed
              height={60} 
              priority 
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden sm:flex items-center space-x-8 pr-4">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-button text-gray-300 hover:text-white px-2 py-2",
                  item.name === "Sign In" && "text-white font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
