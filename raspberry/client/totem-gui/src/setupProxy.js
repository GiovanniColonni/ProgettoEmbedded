const proxy = require("http-proxy-middleware")

module.exports = function(app){
    app.use(proxy("/api",{target: "https://192.168.0.100:5000",secure:false}))
    app.use(proxy("/totem",{target:"https://192.168.0.103:5000/api",secure:false}))
}
