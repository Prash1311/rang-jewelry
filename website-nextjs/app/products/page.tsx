'use client'

import { Suspense } from 'react'
import ProductsPageContent from './products-content'

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageContent />
    </Suspense>
  )
}

function ProductsPageSkeleton() {
  return (
    <div>
      <div className="bg-rang-light py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold font-playfair text-rang-dark">Collections</h1>
          <p className="text-gray-600 mt-2">Explore our exquisite Rajputana jewelry collection</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
