module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  ignorePatterns: [".next", "node_modules", "out"],
  rules: {
    // Background art and icons are plain <img> sources from /public.
    "@next/next/no-img-element": "off",
  },
};
