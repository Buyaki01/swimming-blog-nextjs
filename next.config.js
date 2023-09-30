/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Buyaki01/mdx-swimming-content-files-nextjs/main/images/**',
      }
    ]
  }
}

module.exports = nextConfig
