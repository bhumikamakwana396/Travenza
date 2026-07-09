"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to Travenza! I'm your AI Travel Assistant. How can I help you today?",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply =
      "Sorry, I don't understand. Please contact our support team.";

    const text = input.toLowerCase();

    if (text.includes("goa")) {
      botReply =
        "🏖 Goa Package\n4 Days / 3 Nights\nStarting from ₹14,999.";
    } else if (text.includes("manali")) {
      botReply =
        "🏔 Manali Package\n5 Days / 4 Nights\nStarting from ₹19,999.";
    } else if (text.includes("dubai")) {
      botReply =
        "🌆 Dubai Luxury Tour\n6 Days / 5 Nights\nStarting from ₹49,999.";
    } else if (text.includes("bali")) {
      botReply =
        "🌴 Bali Paradise\n5 Days / 4 Nights\nStarting from ₹54,999.";
    } else if (text.includes("maldives")) {
      botReply =
        "🏝 Maldives Package\n4 Days / 3 Nights\nStarting from ₹59,999.";
    } else if (
      text.includes("hello") ||
      text.includes("hi")
    ) {
      botReply =
        "Hello 👋 Welcome to Travenza! Where would you like to travel?";
    } else if (text.includes("contact")) {
      botReply =
        "📞 +91 7040565088\n📧 bhumikamakwana@gmail.com";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        sender: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white p-4 rounded-full shadow-2xl z-50"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50">

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white p-4">
            <h2 className="text-xl font-bold">
              🤖 Travenza AI
            </h2>

            <p className="text-sm opacity-90">
              Ask me anything about your trip.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    msg.sender === "user"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about packages..."
              className="flex-1 border rounded-full px-4 py-2 outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              className="bg-purple-700 text-white p-3 rounded-full"
            >
              <Send size={18} />
            </button>

          </div>

        </div>
      )}
    </>
  );
}