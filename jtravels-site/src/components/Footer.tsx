"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // fake API
      if (email.includes("@")) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
          <motion.div
            key={status} // forces re-render animation
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-2 border rounded-lg w-64 focus:outline-none"
            />
          </motion.div>

          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        {status === "success" && (
          <p className="text-green-600 mt-3">Subscribed successfully 🎉</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-3">Please enter a valid email</p>
        )}
      </div>
    </footer>
  )
}
