const { defineConfig } = require('@vue/cli-service')
const WorkerPlugin = require("worker-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new WorkerPlugin()]
},
})
