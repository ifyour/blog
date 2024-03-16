const nextraConfigs = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
});

// next.js configuration here
module.exports = {
  ...nextraConfigs(),
};
