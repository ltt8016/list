const express = require('express');
const router = express.Router();
const connection = require('../config/configMysql.js')();
router.post('/logined', function (request, response) {
    connection.query('select * from student where user=? and password=?', [request.body.user, request.body.pwd], function (err, result) {
        if (result.length > 0) {
            // response.send({code: 0, msg: '欢迎进入'});
            response.send({code: 0, msg: '欢迎进入'});
        } else {
            response.send({code: 1, msg: '输入的有误，请重新输入'});
        };
    });
});
module.exports = router;