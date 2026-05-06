import Link from 'next/link'
import products from '../../data/products.json'

export async function generateStaticParams() {
  return products.products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.products.find((p) => p.id === parseInt(params.id))

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold font-playfair text-rang-dark mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find this product.</p>
        <Link href="/products" className="btn-primary">
          Back to Collections
        </Link>
      </div>
    )
  }

  const relatedProducts = products.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div>
      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/products" className="text-gold hover:text-rang-gold mb-6 inline-block">
          ← Back to Collections
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <div className="bg-rang-light rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gold font-semibold">{product.category}</span>
              <h1 className="text-4xl font-bold font-playfair text-rang-dark mt-2 mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl text-gold">★★★★★</span>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gold">₹{product.price.toLocaleString()}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-rang-dark mb-2">Description</h3>
              <p className="text-gray-700 text-lg">{product.description}</p>
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-rang-dark mb-4">Available Colors</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="px-4 py-2 border border-gold rounded-full text-gray-700 text-sm"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Link href={`/contact?product=${product.name}`} className="btn-primary flex-1 text-center py-3">
                Inquire Now
              </Link>
              <button className="btn-secondary flex-1 py-3">Add to Wishlist</button>
            </div>

            {/* Info Section */}
            <div className="mt-12 pt-8 border-t space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold text-rang-dark">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rating:</span>
                <span className="font-semibold text-gold">{product.rating} / 5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer Reviews:</span>
                <span className="font-semibold text-rang-dark">{product.reviews} reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold font-playfair text-rang-dark mb-8">
              Similar Products
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={`/products/${relProduct.id}`}
                  className="product-card group"
                >
                  <div className="product-image-wrapper">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="product-image group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-rang-dark mb-2">{relProduct.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-sm text-gold">★★★★★</span>
                      <span className="text-sm text-gray-600">({relProduct.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-gold">₹{relProduct.price.toLocaleString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gold text-white py-12 text-center">
        <h2 className="text-3xl font-bold font-playfair mb-4">Ready to Order?</h2>
        <p className="text-lg mb-6">Contact us to place your order or inquire about bulk purchases</p>
        <Link href="/contact" className="btn-secondary bg-white text-gold border-white hover:bg-transparent">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
