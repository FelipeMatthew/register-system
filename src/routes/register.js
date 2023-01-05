const registerController = require('../controllers/register');

module.exports = (app) => {
    app.get('/', (req, res) => {
        registerController.index(app,req, res);
    })

    app.post('http://138.68.29.250:8082/', (req, res) => {
          registerController.postMode(app,req,res);
    })
}