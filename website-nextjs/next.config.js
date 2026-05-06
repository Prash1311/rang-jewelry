/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/rang-jewelry',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // For static export
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
