const express = require('express');
const router = express.Router();
const querystrng = require('querystring');
const connection = require('../config/configMysql.js')();
router.get('/deletes', function (request, response) {
    // console.log(request.url)
    let id = querystrng.parse(request.url.split('?')[1]).id;
    // console.log(id)
    connection.query('delete from student where no=?', [id], function (err, result) {
        if (err) {
            response.send({code: 0, msg: '删除失败'});
        } else {
            response.send({code: 1, msg: '删除成功'});
        }
    });
});
module.exports = router;