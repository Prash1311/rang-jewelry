/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // For static export
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
