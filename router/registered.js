const express = require('express');
const connection = require('../config/configMysql.js')();
const router = express.Router();
router.post('/registered', (request, response) => {
    connection.query('select user from student where user=?', [request.body.user], function(err, result) {
        if (result.length > 0) {
            response.send({code: 1, msg: '用户名已存在'});
        } else {
            connection.query('insert into student(user,password) values(?,?)',[request.body.user,request.body.pwd], function (err, result) {
                if (err) {
                    response.send({code: 2, msg: '注册失败'});
                } else {
                    response.send({code: 0, msg: '注册成功'});
                };
            });
        };
    });
});
module.exports = router;