
"use client";

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"


export default function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus("loading")

    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
        mode: "no-cors",
      })
      setStatus("success")
      setMessage("🎉 Thanks for subscribing! Check your email to confirm.")
      form.reset()
    } catch (err) {
      setStatus("error")
      setMessage("⚠️ Something went wrong. Please try again.")
    }
  }

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <footer className="bg-gray-50 py-12 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">JTravels</h3>
          <p className="text-sm text-gray-600">Plan smarter. Travel better. Discover the world with ease.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Destination Guides</a></li>
            <li><a href="#">Travel Tips</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <form
            action="https://YOUR-USERNAME.usX.list-manage.com/subscribe/post?u=UNIQUE_ID&amp;id=LIST_ID"
            method="post"
            target="_blank"
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full sm:flex-row"
          >
            <motion.div<HTMLDivElement>
  animate={status === "error" ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
  transition={{ duration: 0.4 }}
  className="flex-1"
>
  <Input type="email" name="EMAIL" placeholder="Your email" required className="w-full" />
</motion.div>


            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                "Subscribe"
              )}
            </Button>

            <AnimatePresence>
              {status !== "idle" && status !== "loading" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} JTravels. All rights reserved.
      </div>
    </footer>
  )
}
