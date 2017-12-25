const register = require('../router/register.js');
const registered = require('../router/registered.js');
const login = require('../router/login.js');
const logined = require('../router/logined.js');
const use = require('../router/use.js');
const deletes = require('../router/deletes.js');
const update = require('../router/update.js');
module.exports = (app) => {
    app.get('/register', register);
    app.post('/registered', registered);
    app.get('/login', login);
    app.post('/logined', logined);
    app.get('/use', use);
};
