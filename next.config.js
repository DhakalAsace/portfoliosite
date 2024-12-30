/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/devicon/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'aws-icons.com',
        pathname: '/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        pathname: '/svg/**',
      }
    ],
  },
}

module.exports = nextConfig