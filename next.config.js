const nextConfig = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/ddwm5vtrp/image/upload/",
  },
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
