"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LoginDialog = ({ open, setOpen, openSignup }: any) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setOpen(false);

        router.push("/dashboard"); // User Dashboard
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (error) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 hover:opacity-90">
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </DialogTrigger>

      <DialogContent className="p-[2px] animated-border rounded-xl border-0">
        <div className="bg-white dark:bg-zinc-900 rounded-[10px] p-6">
          <DialogHeader>
            <DialogTitle>Login Account</DialogTitle>
            <DialogDescription>
              Join us to start booking your travels
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">

            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              required
            />

            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 rounded-full"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <span
                className="text-purple-700 font-semibold cursor-pointer"
                onClick={openSignup}
              >
                Signup
              </span>
            </div>

            <div className="text-center">
              <span className="text-purple-700 font-semibold cursor-pointer">
                Forgot Password?
              </span>
            </div>

          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;