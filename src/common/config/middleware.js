const path = require("path");
const isDev = think.env === "development";
const nuxt = require("think-nuxt");
module.exports = [
  {
    handle: "meta",
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: "resource",
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, "www"),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: "trace",
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: "payload",
    options: {
      keepExtensions: true,
      limit: "5mb"
    }
  },
  {
    handle: "router",
    options: {}
  },
  {
    handle: nuxt,
    options: {
      // config: nuxtConfig, // nuxt.config.js 配置文件，默认识别为 think.ROOT_PATH/nuxt.config.js
      unless: [/^\/api?/], // 非 nuxtjs 拦截的目录，如果 api controller 等
      isDev: isDev
    }
  },
  "logic",
  "controller"
];
