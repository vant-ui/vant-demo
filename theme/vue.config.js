module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      }
    }
  }
};
