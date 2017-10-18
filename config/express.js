var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

console.log("Criando a var app e instanciando o express");

var app = express();

module.exports = function() {
	console.log("Setando funções do express e carregando rotas e infra");
	app.set('view engine','ejs');
	app.set('views','./app/views')
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(expressValidator());
	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app);
	return app;
}

