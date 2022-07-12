// postcss.config.js
module.exports = {
  plugins: {
    // autoprefixer: {
    //   browser: ["Android >= 4.0", "iOS >= 8"],
    // },
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.6 : 75
      },
      propList: ['*']
    }
  }
}
