function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.lista = function(callback){
	this._connection.query('SELECT * FROM tb_noticias', callback);
}

NoticiasDAO.prototype.salva = function(noticia,callback){
	console.log(noticia);
	this._connection.query('INSERT INTO tb_noticias SET ?', noticia, callback);
	console.log("##############   passei    ########################");
}

module.exports = function(){
		return NoticiasDAO;
}