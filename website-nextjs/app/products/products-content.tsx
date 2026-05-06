'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function ProductsPageContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState('featured')

  const categories = [
    'All',
    'Bangles',
    'Necklaces',
    'Rings',
    'Sheeshpatti',
    'Baju',
    'Rakhdi',
  ]

  const filteredProducts = useMemo(() => {
    let result = products.products

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, priceRange, sortBy])

  return (
    <div>
      <div className="bg-rang-light py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold font-playfair text-rang-dark">Collections</h1>
          <p className="text-gray-600 mt-2">Explore our exquisite Rajputana jewelry collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-6">
                <h3 className="font-bold text-rang-dark mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        selectedCategory === cat
                          ? 'bg-gold text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-rang-dark">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <span className="text-gray-600">
                {filteredProducts.length} products
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
