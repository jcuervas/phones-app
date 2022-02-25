/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.NODE_ENV === 'production' ? 'http://172.25.0.3:3005/' : 'http://localhost:3005/'
  }
}

module.exports = nextConfig
