module.exports = {
  dev: process.env.NODE_ENV !== "production",
  srcDir: "client/",
  env: {
    baseUrl: process.env.BASE_URL || "http://127.0.0.1:8360/"
  },
  head: {
    titleTemplate: "%s - Cloud - CONSOLE",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ]
  },
  css: [],
  plugins: [],
  build: {
    analyze: true
  }
};
