import Link from 'next/link'
import ProductCard from './components/ProductCard'
import products from './data/products.json'

export default function Home() {
  const featuredProducts = products.products.slice(0, 6)
  const categories = [
    { name: 'Bangles', emoji: '💍', count: 8 },
    { name: 'Necklaces', emoji: '✨', count: 5 },
    { name: 'Rings', emoji: '💎', count: 4 },
    { name: 'Sheeshpatti', emoji: '👑', count: 3 },
    { name: 'Baju', emoji: '🌟', count: 2 },
    { name: 'Rakhdi', emoji: '🎀', count: 2 },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'The quality and design are exceptional! I received so many compliments at the wedding.',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      text: 'Absolutely beautiful pieces. The craftsmanship is incredible for the price.',
      rating: 5,
    },
    {
      name: 'Mehta Family',
      text: 'Perfect for our family occasions. Authentic Rajputana designs that everyone loves.',
      rating: 5,
    },
  ]

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="hero-section relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          poster="/rang-jewelry/images/bangles/Bangles-Collection-Showcase-01.mp4"
        >
          <source src="/rang-jewelry/images/bangles/Bangles-Collection-Showcase-01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-white">
            RANG
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-lora text-gold">The Colours of Tradition</p>
          <p className="text-lg mb-8 text-gray-100">
            Discover the authentic beauty of Rajputana artificial ornaments
          </p>
          <Link href="/products" className="btn-primary bg-gold hover:bg-rang-gold text-white">
            Explore Collections
          </Link>
        </div>
      </section>

      {/* Collections Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="section-title">Our Collections</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.name}`}
              className="group text-center"
            >
              <div className="bg-white rounded-lg p-6 mb-3 hover:shadow-lg transition group-hover:bg-gold">
                <div className="text-4xl mb-2">{cat.emoji}</div>
                <h3 className="font-semibold text-rang-dark group-hover:text-white">{cat.name}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white">{cat.count} items</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white my-8 rounded-lg">
        <h2 className="section-title">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="section-title">Why Choose Rang?</h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Authentic Design', icon: '✨', desc: 'Genuine Rajputana jewelry designs' },
            { title: 'Quality Materials', icon: '💎', desc: 'Premium artificial materials' },
            { title: 'Affordable Price', icon: '💰', desc: 'Best prices in the market' },
            { title: 'Fast Delivery', icon: '🚚', desc: 'Quick and secure delivery' },
          ].map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-rang-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-rang-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-rang-dark">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Ready to Shine?
          </h2>
          <p className="text-white mb-8 text-lg">
            Explore our complete collection of Rajputana jewelry
          </p>
          <Link href="/products" className="btn-secondary bg-white text-gold border-white hover:bg-transparent">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  )
}
