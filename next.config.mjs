/** @type {import('next').NextConfig} */
// Enable caching for client side page for 30 seconds
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    }
  }
};

export default nextConfig;
