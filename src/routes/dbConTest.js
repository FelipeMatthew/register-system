module.exports = function(app) {
    app.get('/teste', (req, res) => {

        const mysql = require('mysql');

        const conn = mysql.createConnection({
            host: 'virtual2.febracorp.org.br:1433',
            user:'user_trial',
            password:'7412LIVE!@#$&*()',
            database: 'CONTOSO'
        })    
        
        conn.query('select * from tbs_nome', function(error, result) {
            res.send(result);
        })
    })
}