/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
      {
        hostname: "cdn.newscj.com*",
      },
    ],
  },
};

module.exports = nextConfig;
