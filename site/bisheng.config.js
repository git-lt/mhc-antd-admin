const path = require('path');
module.exports = {
  port: 9011,
  root: '/mhc-antd-admin/',
  source: {
    components: './components',
    docs: './docs',
    changelog: [
      'CHANGELOG.md',
    ],
  },
  themeConfig: {
    typeOrder: {
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
      Other: 5,
    },
  },
  output: './_site',
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ],
  webpackConfig(config) {
    config.resolve.alias = {
      'mhc-antd-admin': path.join(process.cwd(), 'components/index.js'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    };
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };
    return config;
  }
};
