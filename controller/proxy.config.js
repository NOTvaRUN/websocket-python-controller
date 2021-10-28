const PROXY_CONFIG = [
    {
        context: [
            "/keycode"
        ],
        target: "http://varunisnayak.com",
        secure: false,
        changeOrigin: true,
    },
  ]
  
  module.exports = PROXY_CONFIG;
  