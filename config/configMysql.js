const mysql = require('mysql');
// const express = require('express');
// const router = express.Router();
module.exports = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123',
        database: '1508a',
        insecureAuth: true
    });
    connection.connect(err => {
        if (err) {
            throw err;
        }
    });
    return connection;
}