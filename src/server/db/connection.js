const mysql = require('mysql');

module.exports = () => { 
    return mysql.createConnection ({ //conexion original
        host:"localhost",
        user:"root",
        password:"",
        database:"login"
    });
};

