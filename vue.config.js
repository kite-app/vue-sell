/*
 * @Author: kite 
 * @Date: 2018-09-18 17:17:14 
 * @Last Modified by: kite
 * @Last Modified time: 2018-09-18 18:05:12
 */
module.exports = {
  devServer: {
      port: 8080,
      host: '0.0.0.0',
      https: false,
      open: true,
      proxy: {}
  },
  configureWebpack: config => {    
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}