import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>RANG</h3>
          <p className="text-sm text-gray-400 mb-4">
            Experience the authentic colors of Rajputana tradition with our exquisite artificial jewelry collection.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-2xl">f</a>
            <a href="#" className="text-2xl">𝕏</a>
            <a href="#" className="text-2xl">📷</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>COLLECTIONS</h3>
          <Link href="/products?category=Bangles">Bangles</Link>
          <Link href="/products?category=Necklaces">Necklaces</Link>
          <Link href="/products?category=Rings">Rings</Link>
          <Link href="/products?category=Sheeshpatti">Sheeshpatti</Link>
          <Link href="/products?category=Baju">Baju</Link>
          <Link href="/products?category=Rakhdi">Rakhdi</Link>
        </div>

        <div className="footer-section">
          <h3>COMPANY</h3>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <a href="#faq">FAQ</a>
          <a href="#shipping">Shipping Info</a>
          <a href="#returns">Returns</a>
        </div>

        <div className="footer-section">
          <h3>CONTACT</h3>
          <p className="text-sm text-gray-400 mb-2">📞 +91 XXXXXXXXXX</p>
          <p className="text-sm text-gray-400 mb-2">✉️ info@rang-jewelry.com</p>
          <p className="text-sm text-gray-400">📍 India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Rang - The Colours of Tradition. All rights reserved.</p>
      </div>
    </footer>
  )
}
