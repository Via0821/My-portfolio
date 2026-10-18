/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src/app", "src/components", "src/constants"],
  },
  // Keep Vite-style imports: <video src={file} /> receives a URL string instead of a Next image object.
  images: {
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp|svg|mp4|webm)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
