"use client";

import Image from "next/image";
import Link from "next/link";
import AIChat from "@/components/AIChat";
import ContactUsDialog from "./ContactUsDialog";

export default function Footer() {
  return (
    <>
     <hr className="my-8 border-gray-300" />
      {/* Top Gradient Line */}
      

      <footer className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Logo */}
            <div>
              <Image
                src="/travenza.png"
                alt="Travenza"
                width={180}
                height={60}
              />

              <p className="mt-4 text-purple-700 font-semibold leading-7">
                Made with ❤️ by Travenza Team
                <br />
                <span className="font-bold">
                  JOURNEY BEYOND LIMITS
                </span>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-purple-700 font-semibold">
                <li>
                  <Link href="/" className="hover:text-pink-500">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/destination" className="hover:text-pink-500">
                    Destinations
                  </Link>
                </li>

                <li>
                  <Link href="/packages" className="hover:text-pink-500">
                    Packages
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-pink-500">
                    About
                  </Link>
                </li>

                <li>
  <ContactUsDialog />
</li>
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Popular Destinations
              </h3>

              <ul className="space-y-3 text-purple-700 font-semibold">
                <li>🏝️ Goa</li>
                <li>🏔️ Manali</li>
                <li>🏙️ Dubai</li>
                <li>🌴 Bali</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Contact Us
              </h3>

              <ul className="space-y-3 text-purple-700 font-semibold">
                <li>📍 Bhavnagar, Gujarat</li>
                <li>📞 +91 7040565088</li>
                <li>✉️ bhumikamakwana@gmail.com</li>
              </ul>

              <div className="mt-5">
                <AIChat />
              </div>
            </div>
          </div>

         
<br></br><br></br>
          {/* Copyright */}
          <div className="rounded-lg bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 py-4 text-center text-white font-semibold">
            © {new Date().getFullYear()} Travenza. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}