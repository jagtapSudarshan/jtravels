"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-white">JTravels</h2>
            <p className="mt-2 text-sm text-gray-400">
              Explore the world with comfort and safety.  
              We make your journeys memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Destinations</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-bold text-white">Newsletter</h2>
            <p className="mt-2 text-sm text-gray-400">
              Subscribe to get the latest travel deals.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex items-center"
            >
              <motion.div
                animate={
                  status === "error"
                    ? { x: [0, -8, 8, -8, 8, 0] }
                    : { x: 0 }
                }
                transition={{ duration: 0.4 }}
                className="flex-1"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>

            {status === "success" && (
              <p className="mt-2 text-green-400 text-sm">
                ✅ Subscribed successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-red-400 text-sm">
                ⚠️ Please enter a valid email.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JTravels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
