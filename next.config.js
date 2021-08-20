module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/generateSiteMap");
    }

    return config;
  },
};
