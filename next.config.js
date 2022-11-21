/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['external-content.duckduckgo.com','www.google.com','www.freepik.com','i.pinimg.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
