module.exports = {
  apps: [
    {
      name: 'HyperOS.fans',
      port: '80',
      host: 'hyperos.pen-net.cn',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
