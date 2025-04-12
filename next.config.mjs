/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      unoptimized: true, // Serve images as-is for Capacitor
    },
    output: 'export'
};

export default nextConfig;
