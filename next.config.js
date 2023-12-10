/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  transpilePackages: ['next-international', 'international-types'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig
