"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SignupDialog = ({ open, setOpen, openLogin }: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:8080/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully.");

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");

        // Open Login Dialog after 1 second
        setTimeout(() => {
          setOpen(false);
          openLogin();
        }, 1000);
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 hover:opacity-90">
          <UserPlus className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </DialogTrigger>

      <DialogContent className="p-[2px] animated-border rounded-xl border-0">
        <div className="bg-white dark:bg-zinc-900 rounded-[10px] p-6">
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
            <DialogDescription>
              Join us to start booking your travels
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />

            <input
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />

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

            <input
              placeholder="Phone Number*"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border rounded p-2"
              required
            />

            {message && (
              <p className="text-purple-700 text-center">{message}</p>
            )}

            {error && (
              <p className="text-red-500 text-center">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 rounded-full"
            >
              {loading ? "Creating..." : "Create Account"}
            </Button>

            <div className="text-center">
              Already have an account?{" "}
              <span
                className="text-purple-700 font-semibold cursor-pointer"
                onClick={openLogin}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;