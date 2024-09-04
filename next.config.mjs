/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: '*' }],
    unoptimized: true,
  },
};

export default nextConfig;
