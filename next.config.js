/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/Anasayfa",
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
