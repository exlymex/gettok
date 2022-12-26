/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['external-content.duckduckgo.com','www.google.com','www.freepik.com','i.pinimg.com','play-lh.googleusercontent.com','lh3.googleusercontent.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
