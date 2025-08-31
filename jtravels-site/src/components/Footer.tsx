"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">JTravels</h3>
          <p className="text-sm mt-2">
            Explore the world with us. Your trusted travel partner.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="text-sm mt-2">Subscribe to get the latest travel updates.</p>
          <form
            className="mt-4 flex flex-col gap-2 w-full sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("success");
              setTimeout(() => setStatus("idle"), 2000);
            }}
          >
            <motion.div
              animate={status === "error" ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white"
              />
            </motion.div>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-white text-gray-900 font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
          {status === "success" && <p className="text-green-400 text-sm mt-2">Subscribed!</p>}
          {status === "error" && <p className="text-red-400 text-sm mt-2">Error subscribing</p>}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JTravels. All rights reserved.
      </div>
    </footer>
  );
}
