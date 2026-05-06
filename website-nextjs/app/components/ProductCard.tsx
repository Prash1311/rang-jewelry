'use client'

import Link from 'next/link'

export default function ProductCard({ product }: any) {
  const imageSrc = `/rang-jewelry${product.image}`

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={imageSrc}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f5e6d3" width="400" height="400"/%3E%3Ctext x="50%" y="50%" font-size="24" fill="%23d4a574" text-anchor="middle" dominant-baseline="middle"%3EProduct Image%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-rang-dark mb-2">{product.name}</h3>

        <div className="flex items-center gap-1 mb-3">
          <span className="stars">★★★★★</span>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="mb-3">
          <span className="text-gold font-bold text-lg">₹{product.price.toLocaleString()}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="btn-primary flex-1 text-sm text-center"
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${product.name}`}
            className="btn-secondary flex-1 text-sm text-center"
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  )
}
