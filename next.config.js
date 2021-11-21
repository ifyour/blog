const nextraConfigs = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

// next.js configuration here
module.exports = {
  ...nextraConfigs(),
};
