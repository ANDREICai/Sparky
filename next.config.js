module.exports = {
  webpack(config) {
    config.performance = {
      ...config.performance,
      maxEntrypointSize: 1024 * 1024 * 10, // 10 MB
      maxAssetSize: 1024 * 1024 * 10,
    };
    return config;
  },
};