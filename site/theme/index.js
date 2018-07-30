const pluginAntdConfig = {
  babelConfig: JSON.stringify({
    plugins: [
      require.resolve('babel-plugin-transform-class-properties'),
      require.resolve('babel-plugin-transform-object-rest-spread'),
      require.resolve('babel-plugin-transform-decorators-legacy'),
    ],
  }),
};

module.exports = {
  lazyLoad: false,
  home: '/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    `bisheng-plugin-antd?${JSON.stringify(pluginAntdConfig)}`,
    `bisheng-plugin-react?${JSON.stringify(pluginAntdConfig)}`,
  ],
  routes: [
    {
      path: '/',
      component: './template/Home'
    },
    {
      path: '/changelog',
      component: './template/Doc'
    },
    {
      path: '/docs/:doc',
      component: './template/Doc'
    },
    {
      path: '/components/:doc',
      component: './template/Doc'
    },
    {
      path: '/404',
      component: './template/NotFound'
    }
  ]
};
