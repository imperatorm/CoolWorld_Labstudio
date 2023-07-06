/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080,1200, 1920]
  },
  swcMinify:true,
};

module.exports = nextConfig
