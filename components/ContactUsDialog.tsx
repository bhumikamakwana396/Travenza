"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  PhoneCall,
} from "lucide-react";

export default function ContactUsDialog() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message Sent Successfully!");
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 px-6 py-5 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
  <PhoneCall className="mr-2 h-5 w-5" />
  Contact Us
</Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl rounded-3xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">

          {/* Left Side */}
          <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-500 text-white p-8">

            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">
                Contact Travenza
              </DialogTitle>

              <DialogDescription className="text-white/90 mt-2">
                We'd love to help you plan your next adventure.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-4">
                <Phone />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>support@travenza.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>Ahmedabad, Gujarat</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock />
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p>Mon - Sat | 9 AM - 8 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}

          <div className="p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <Input
                placeholder="Full Name"
                required
              />

              <Input
                type="email"
                placeholder="Email Address"
                required
              />

              <Input
                placeholder="Phone Number"
              />

              <Input
                placeholder="Destination"
              />

              <Textarea
                placeholder="Your Message..."
                rows={5}
                required
              />

              <Button
                className="w-full rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500"
                disabled={loading}
              >
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}