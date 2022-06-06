const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ip_project',
}

module.exports = {
    connection: mysql.createConnection(config)
}
