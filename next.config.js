/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  env: {
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  },
  experimental: {
    useDeploymentId: true,
    // Optionally, use with Server Actions
    useDeploymentIdServerActions: true,
  },
};

module.exports = nextConfig;
