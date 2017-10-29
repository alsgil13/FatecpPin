var mysql = require('mysql');

function ConnectionFactory(){
	console.log("Criando a conexao com o banco");
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'talita150115',
		database: 'fatecpin'
	});
}

//wrapper
module.exports = function(){
	return ConnectionFactory;
}