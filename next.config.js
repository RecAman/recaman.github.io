/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['recaman.github.io'],
  },
   output: 'export',
}

module.exports = nextConfig
