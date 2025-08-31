import './globals.css'

export const metadata = {
  title: 'JTravels',
  description: 'Plan smarter. Travel better.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}