'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	proxyTable: {
    '/eolinker': {
		target: 'http://118.89.40.213',//api代理服务器地址http://ip:port
		secure: true,
		changeOrigin: true
		}
  }
})
