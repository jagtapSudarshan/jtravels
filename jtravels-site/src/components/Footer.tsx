"use client"

import { Loader2 } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const [loading, setLoading] = useState(false)

  const handleSubscribe = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000) // fake API call
  }

  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <h2 className="text-lg mb-4">Subscribe to our newsletter</h2>
      <div className="flex justify-center gap-2">
        <motion.input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 rounded text-black"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.button
          onClick={handleSubscribe}
          disabled={loading}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          {loading && <Loader2 className="animate-spin w-4 h-4" />}
          Subscribe
        </motion.button>
      </div>
    </footer>
  )
}
