"use client";

import Image from "next/image";
import Link from "next/link";

import AuthDialog from "@/components/AuthDialog";
import ContactUsDialog from "@/components/ContactUsDialog";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/travenza.png"
            alt="Travenza Logo"
            width={180}
            height={80}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-purple-700 font-semibold ">
          <Link
            href="/"
           className="hover:text-pink-500 transition">
            Home
          </Link>

          <Link
            href="/destination"
            className="hover:text-pink-500 transition"
          >
            Destinations
          </Link>

          <Link
            href="/packages"
            className="hover:text-pink-500 transition"
          >
            Packages
          </Link>
          
          <Link
            href="/about"
            className="hover:text-pink-500 transition"
          >
            About
          </Link>

          <AuthDialog />

         
        </div>
      </div>
    </nav>
  );
}