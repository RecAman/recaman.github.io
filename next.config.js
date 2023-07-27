/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
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
  
  output: isProd ?   'export' :'standalone',
}

module.exports = nextConfig
