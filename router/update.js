const express = require('express');
const router = express.Router();
const connection = require('../config/configMysql.js')();
router.post('/update', function (request, response) {
    // console.log(response)
    connection.query('update student set user=?,password=? where no=?', [request.body.user, request.body.pwd, request.body.id], function(err, result) {
        if (err) {
            response.send({code: 0, msg: '修改失败'});
        } else {
            response.send({code: 1, msg: '修改成功'});
        }
    });
});
module.exports = router;