/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  contentSecurityPolicy:
    "default-src 'none'; script-src 'self'; style-src 'nonce-{style-nonce}'; connect-src 'self'; img-src 'self'; font-src 'self'; base-uri 'self'; child-src 'self';",
};

module.exports = nextConfig;
