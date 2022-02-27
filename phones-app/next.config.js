/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: process.env.NODE_ENV === 'production' ? 'http://172.25.0.3:3005/' : 'http://localhost:3005/',
    LOCAL_URL: 'http://localhost:8080/'
  }
}

module.exports = nextConfig
