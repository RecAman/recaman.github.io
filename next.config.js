/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  output: 'export',
}

module.exports = nextConfig
