'use client'

import { Suspense } from 'react'
import ContactPageContent from './contact-content'

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPageContent />
    </Suspense>
  )
}

function ContactPageSkeleton() {
  return (
    <div>
      <div className="bg-rang-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-playfair text-rang-dark mb-4">Get In Touch</h1>
          <p className="text-gray-600">Have questions? We'd love to hear from you!</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}
