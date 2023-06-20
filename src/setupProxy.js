const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://karollzielinski.github.io/blooog/',
      changeOrigin: true,
    })
  );
};