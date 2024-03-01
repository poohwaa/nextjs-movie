import { Metadata } from "next"
import Navigation from "../components/Navigation"
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movie',
    default: 'Next Movie'
  },
  description: 'Best Movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        GLOBOL FOOTER
      </body>
    </html>
  )
}
