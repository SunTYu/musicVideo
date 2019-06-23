const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
let router = express.Router();

router.use(bodyparser.json()); // 使用bodyparder中间件，
router.use(bodyparser.urlencoded({ extended: true }));
router.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        secure : true,
        maxAge : 1000 * 60 * 60 * 24, // 设置 session 的有效时间，单位毫秒
    },
    store:new MongoStore({   //将session存进数据库  用来解决负载均衡的问题
        url:'mongodb://127.0.0.1:27017/ss',
        touchAfter:24*3600 //通过这样做，设置touchAfter:24 * 3600，您在24小时内
       //只更新一次会话，不管有多少请求(除了在会话数据上更改某些内容的除外)
    })
}));
router.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,userId,token,Access-Control-Allow-Headers");
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Max-Age", "3600");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
})

module.exports = router;