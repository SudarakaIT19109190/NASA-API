/* @type {import('next').NextConfig} 
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental:{ appDir: true },
//   reactStrictMode: false,
// }

module.exports = {
  images: {
    deviceSizes: [320,420,768,1024,1200],
    domains: ["images-assets.nasa.gov"],
    path: "/_next/image",
    loader: "default",
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        deviceSizes: [320,420,768,1024,1200],
        domains: ["images-assets.nasa.gov"],
        path: "/_next/image",
        loader: "default",
      },
    ],
  },
};

module.exports = nextConfig;
