require('dotenv').config(); 

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('./public'));

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
.include('src/routes') // Faz um scan das pastas do routes pega os modulos e inclue  no sevidor "src" direto
.then('src/config/dbConnection.js') //Incluindo com o banco de dados no consign
.then('src/models') // Incluiu os models - Entidades do banco de dados
.then('src/controllers')
.into(app); // faz um scan no INCLUDE, pega esses modulos e coloca dentro do servidor  - App

module.exports = app;