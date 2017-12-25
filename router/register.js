const express = require('express');
const router = express.Router();
router.get('/register', function (request, response) {
    response.render('register', {
        id:0
    });
});
module.exports = router;