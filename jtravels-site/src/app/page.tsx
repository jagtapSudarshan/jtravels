import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to JTravels</h1>
        <p className="text-lg text-gray-600">Plan smarter. Travel better. Discover the world with ease.</p>
      </div>
      <Footer />
    </main>
  )
}