export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-rang-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-playfair text-rang-dark mb-4">About Rang</h1>
          <p className="text-gray-600">Preserving the colours of Rajputana tradition</p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Welcome Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-rang-dark mb-6">Welcome to Rang</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to Rang – The Colour of Tradition, a celebration of heritage, elegance, and timeless craftsmanship. Founded by Parul Singh, Rang was born from a deep admiration for the royal artistry of Rajputana jewellery and a desire to bring its beauty into modern fashion.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Rang, every piece reflects the grandeur of Rajasthan's cultural legacy. From intricately designed necklaces and traditional earrings to bangles, maang tikas, chokers, bridal collections, and contemporary fusion jewellery, our creations are inspired by the rich traditions once adorned by queens and royal households.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We believe jewellery is more than ornamentation. It is identity, emotion, and storytelling woven into metal, stones, and design. Our mission is to preserve and promote the timeless charm of Rajputana jewellery while making it accessible to women who appreciate culture with elegance.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Each collection at Rang is carefully curated to blend traditional aesthetics with modern style, allowing you to carry a touch of royalty in every occasion, whether it is a wedding, festive celebration, cultural event, or everyday grace.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gold text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-playfair mb-4">Our Vision</h3>
            <p>
              To revive and promote the magnificent heritage of Rajputana jewellery across generations and borders, keeping the colours of tradition alive in contemporary fashion.
            </p>
          </div>

          <div className="bg-rang-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-playfair text-rang-dark mb-4">Our Mission</h3>
            <div className="text-gray-700 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>To celebrate the artistry of traditional Indian jewellery</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>To support and preserve cultural craftsmanship</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>To offer elegant artificial jewellery inspired by royal Rajputana heritage</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold font-bold">•</span>
                <span>To make timeless tradition a part of modern lifestyles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-rang-dark mb-8">Why Choose Rang?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Authentic Designs',
                desc: 'Every piece is inspired by traditional Rajputana patterns and craftsmanship.',
              },
              {
                title: 'Premium Quality',
                desc: 'We use high-quality materials to ensure durability and beauty.',
              },
              {
                title: 'Affordable Luxury',
                desc: 'Experience premium jewelry at prices that make sense.',
              },
              {
                title: 'Fast & Reliable Delivery',
                desc: 'Quick shipping with secure packaging to your doorstep.',
              },
              {
                title: 'Variety of Collections',
                desc: 'From bangles to elaborate headpieces, we have it all.',
              },
              {
                title: 'Customer Support',
                desc: 'We\'re here to help with any questions or concerns.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-3xl text-gold">✓</div>
                <div>
                  <h4 className="font-semibold text-rang-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-rang-dark mb-8">Our Collections</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Bangles',
                desc: 'Traditional and modern bangle designs that add elegance to any occasion.',
              },
              {
                name: 'Necklaces',
                desc: 'Stunning necklaces with Kundan, Meenakari, and pearl work.',
              },
              {
                name: 'Rings',
                desc: 'Statement rings that enhance your beauty and grace.',
              },
              {
                name: 'Sheeshpatti',
                desc: 'Exquisite mirror-work headpieces for special occasions.',
              },
              {
                name: 'Arm Ornaments (Baju)',
                desc: 'Graceful arm jewelry with traditional Rajputana designs.',
              },
              {
                name: 'Festival Special (Rakhdi)',
                desc: 'Beautiful Rakhis for your special siblings.',
              },
            ].map((coll, index) => (
              <div key={index} className="border-l-4 border-gold pl-6 py-4">
                <h4 className="font-bold text-rang-dark text-lg mb-2">{coll.name}</h4>
                <p className="text-gray-600">{coll.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-white p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold font-playfair text-rang-dark mb-6 text-center">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Authenticity',
                desc: 'We honor traditional designs and cultural heritage in every piece.',
              },
              {
                icon: '⭐',
                title: 'Quality',
                desc: 'Excellence in materials, design, and craftsmanship is our commitment.',
              },
              {
                icon: '❤️',
                title: 'Customer Care',
                desc: 'Your satisfaction and trust are our highest priorities.',
              },
            ].map((val, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{val.icon}</div>
                <h4 className="font-bold text-rang-dark text-lg mb-2">{val.title}</h4>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="bg-rang-light p-8 rounded-lg text-center border-l-4 border-gold">
          <p className="text-xl font-playfair text-rang-dark font-semibold italic">
            &quot;At Rang – The Colour of Tradition, tradition is not kept in museums. It sparkles, shines, and lives with you.&quot;
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-gold text-white py-16 mt-16 text-center">
        <h2 className="text-3xl font-bold font-playfair mb-4">Explore Our Collections</h2>
        <p className="text-xl mb-6">Discover the colours of tradition with Rang</p>
        <a href="/products" className="btn-secondary bg-white text-gold border-white hover:bg-transparent">
          Shop Now
        </a>
      </div>
    </div>
  )
}
