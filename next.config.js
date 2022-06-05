const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
