"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
    >
      <ArrowUp size={26} />
    </button>
  );
}