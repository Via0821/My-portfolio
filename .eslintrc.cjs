module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  ignorePatterns: [".next", "node_modules", "out"],
  rules: {
    // Icons, project media, and WebGL textures are plain <img> sources.
    "@next/next/no-img-element": "off",
  },
};
