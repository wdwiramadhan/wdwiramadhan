const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "pixelstalk.net"],
  },
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
