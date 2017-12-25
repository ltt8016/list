const express = require('express');
const router = express.Router();
router.get('/login', function (request, response) {
    response.render('login', {
        id:1
    });
});
module.exports = router;