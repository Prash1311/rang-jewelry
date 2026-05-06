'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactPageContent() {
  const searchParams = useSearchParams()
  const productParam = searchParams.get('product') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: productParam,
    message: '',
  })

  useEffect(() => {
    if (productParam) {
      setFormData((prev) => ({
        ...prev,
        product: productParam,
      }))
    }
  }, [productParam])

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', product: '', message: '' })
    }, 3000)
  }

  return (
    <div>
      <div className="bg-rang-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-playfair text-rang-dark mb-4">Get In Touch</h1>
          <p className="text-gray-600">Have questions? We'd love to hear from you!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold font-playfair text-rang-dark mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold text-rang-dark">Phone</h3>
                  <p className="text-gray-600">+91 XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-rang-dark">Email</h3>
                  <p className="text-gray-600">info@rang-jewelry.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-rang-dark">Address</h3>
                  <p className="text-gray-600">
                    Rajputana Jewelry Hub<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-rang-dark">Business Hours</h3>
                  <p className="text-gray-600">
                    Mon - Sat: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold font-playfair text-rang-dark mb-6">Send us a Message</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Product Interest</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value="">Select a category</option>
                  <option value="Bangles">Bangles</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="Rings">Rings</option>
                  <option value="Sheeshpatti">Sheeshpatti</option>
                  <option value="Baju">Baju</option>
                  <option value="Rakhdi">Rakhdi</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-rang-dark text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do you ship internationally?',
                a: 'Currently, we ship within India. Please contact us for international inquiries.',
              },
              {
                q: 'What is the return policy?',
                a: 'We offer a 7-day return policy for defective products. Please contact us for details.',
              },
              {
                q: 'Are your products hypoallergenic?',
                a: 'Most products are suitable for sensitive skin. Please specify any allergies when inquiring.',
              },
              {
                q: 'Can I place bulk orders?',
                a: 'Yes! We offer special pricing for bulk orders. Please contact us for wholesale rates.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold text-rang-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
