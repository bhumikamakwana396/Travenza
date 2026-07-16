"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.replace("/");
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome to Travenza Dashboard
      </h1>
    </div>
  );
}