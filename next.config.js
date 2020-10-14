const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.html$/, use: 'raw-loader' });
    return config;
  },
  assetPrefix: isProduction ? '' : '',
}
