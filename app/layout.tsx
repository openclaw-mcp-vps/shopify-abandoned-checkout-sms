import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SMS Recovery for Abandoned Shopify Checkouts",
  description: "Recover lost sales automatically. Send personalized SMS messages to customers who abandon checkout with smart timing and discount triggers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c54b9d41-cae7-4432-9e8b-cec1ea32a177"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
