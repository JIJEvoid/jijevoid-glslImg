module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.glsl$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()

  },
  // 打包时不生成.map文件
  productionSourceMap: false,
}
