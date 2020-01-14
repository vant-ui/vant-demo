export default {
  mode: 'universal',
  head: {
    title: 'Vant Nuxt Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  plugins: ['~/plugins/vant'],
  build: {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            // 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
            style: false
          },
          'vant'
        ]
      ]
    }
  }
};
