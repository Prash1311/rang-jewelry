import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rang - The Colours of Tradition | Artificial Rajputana Jewelry',
  description: 'Authentic Rajputana artificial ornaments and jewelry. Bangles, necklaces, rings, and traditional jewelry.',
  keywords: 'Rajputana jewelry, artificial jewelry, bangles, necklaces, rings, traditional jewelry',
  openGraph: {
    title: 'Rang - The Colours of Tradition',
    description: 'Authentic Rajputana artificial ornaments and jewelry',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
