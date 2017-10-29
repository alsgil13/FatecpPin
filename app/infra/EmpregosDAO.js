function EmpregosDAO(connection){
	this._connection = connection;
}

EmpregosDAO.prototype.lista = function(callback){
	this._connection.query('SELECT * FROM tb_empregos', callback);
}

EmpregosDAO.prototype.salva = function(emprego,callback){
	console.log(emprego);
	this._connection.query('INSERT INTO tb_empregos SET ?', emprego, callback);
	console.log("##############   passei    ########################");
}

module.exports = function(){
		return EmpregosDAO;
}