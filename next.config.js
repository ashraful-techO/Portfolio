/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  env: {
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  },
};

module.exports = nextConfig;
