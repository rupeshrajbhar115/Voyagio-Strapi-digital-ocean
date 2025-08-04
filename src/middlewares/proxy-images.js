const proxy = require("http-proxy-middleware").createProxyMiddleware;

module.exports = (config, { strapi }) => {
  return proxy({
    target: "https://voyagio-imagestore1.sfo3.digitaloceanspaces.com",
    changeOrigin: true,
    pathRewrite: {
      "^/uploads": "", // remove `/uploads` from path
    },
  });
};
