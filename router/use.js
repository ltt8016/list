const express = require('express');
const router = express.Router();
const connection = require('../config/configMysql.js')();
router.get('/use', function (request, response) {
    connection.query('select * from student', function (err, result) {
        if (err) {
            response.send({code: 1, msg: '获取用户信息失败'});
        } else {
            response.render('use', {
                id: 2,
                data: result
            });
        };
    });
});
module.exports = router;