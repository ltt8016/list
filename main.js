// 引入
const express = require('express');
const path = require('path');
// const ejs = require('ejs');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
app.locals.title = ['注册', '登录', '使用'];// 模板引擎全局设置网页的title
app.set('views', path.join(__dirname, 'view'));// 设置模板引擎的文件路径
app.set('view engine', 'ejs');// 设置模板引擎的类型
app.use(express.static(path.join(__dirname, 'static')));// 静态资源
app.use(bodyParser.urlencoded({extended: false}));// 第三方中间件
require('./config/configRouter.js')(app);// 路由的配置
// 错误中间件
app.use((req, res, next) => {
    const err = new Error('not fond...');
    next(err);
});
app.use((err, req, res, next) => {
    res.send(err.message);
});
// 两种监听方式
// app.listen(8899);
http.createServer(app).listen(8899, () => {
    console.log('listen this port 8899...');
});
