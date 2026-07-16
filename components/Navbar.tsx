"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { UserCircle2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AuthDialog from "@/components/AuthDialog";

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);

    router.push("/");
    window.location.reload();
  };

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
        <div className="flex items-center gap-6 text-purple-700 font-semibold">

          <Link
            href="/"
            className="hover:text-pink-500 transition"
          >
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

          {user ? (
            <>
              <Link
            href="/dashbord"
            className="hover:text-pink-500 transition"
          >
            Dashboard
          </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <img
                      src="/p3.jpeg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full border-2 border-pink-500 object-cover hover:scale-105 transition"
                    />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52">

                  <div className="px-3 py-2 border-b">
                    <p className="font-semibold">
                      {user.firstname} {user.lastname}
                    </p>
                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>
                  </div>

                  <DropdownMenuItem onClick={() => router.push("/profile")}>
                    <UserCircle2 className="mr-2 h-4 w-4" />
                     Profile
                  </DropdownMenuItem>

                  
                  <DropdownMenuItem onClick={() => router.push("/wishlist")}>
                    ❤️ WishList
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => router.push("/bookings")}>
                    🧳 My Bookings
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600"
                  >
                    🚪 Logout
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <AuthDialog />
          )}

        </div>
      </div>
    </nav>
  );
}