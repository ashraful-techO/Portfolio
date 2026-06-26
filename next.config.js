/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  experimental: {
    scrollRestoration: true,
  },

  env: {
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  },
};

module.exports = nextConfig;