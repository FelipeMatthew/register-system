const mysql = require('mysql');

const connMySQL = function(){
            return mysql.createConnection({
            host: 'virtual2.febracorp.org.br:1433',
            user:'user_trial',
            password:'7412LIVE!@#$&*()',
            database: 'CONTOSO'
        });
}

module.exports = function(){
    console.log('Success DB connection');
    return connMySQL;
}
