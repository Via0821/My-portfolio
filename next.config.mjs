/** @type {import('next').NextConfig} */
const nextConfig = {
  // React 19 Strict Mode double-mounts drei's <Html> loader and throws
  // "synchronously unmount a root while React was already rendering".
  reactStrictMode: false,
  eslint: {
    dirs: ["src/app", "src/components", "src/constants", "src/hoc", "src/utils"],
  },
  // Keep Vite-style imports: <img src={file} /> and <video src={file} />
  // receive a URL string instead of a Next image object.
  images: {
    disableStaticImages: true,
  },
  transpilePackages: ["three", "maath"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp|svg|mp4|webm)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
