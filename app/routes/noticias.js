module.exports = function(app){

	var listarNoticias = function(req,res){
		
		//cria as vars da infra		
		var connection = app.infra.ConnectionFactory();
		var NoticiasDAO = new app.infra.NoticiasDAO(connection);

		//chama a lista que está em /infra/produtosBanco.js
		NoticiasDAO.lista(function(erro,resultados){
			//retornando Json
			res.format({
				html: function(){
					res.render('noticias/lista',{lista:resultados});		
				},
				json: function(){
					res.json(resultados);
				}
			});

			
		});

		connection.end();

		console.log("listando");
		
	}

	app.get('/noticias',listarNoticias);

	/*
	app.get('/produtos/form',function(req,res){
    	res.render('produtos/form',{errosValidacao:{},produto:{}});
	});
	*/

	app.post('/noticias', function(req,res){
		
		var noticia = req.body;
		

		//Validação
		var erros = req.validationErrors();
		if(erros){
			res.format({
				html: function(){
					res.status(400).render('produtos/form',{errosValidacao:erros,produto:produto});		
				},
				json: function(){
					res.status(400).json(erros);
				}
			});
			 //passa pro html
			return;
		}




		console.log(noticia);
		var connection = app.infra.ConnectionFactory();
		var noticiasDAO = new app.infra.NoticiasDAO(connection);
		noticiasDAO.salva(noticia,function(erros,resultados){
			console.log(erros);
			res.redirect('/noticias');//Always redirect afte POST -- Nunca esquecer;

		});
	});
	

}
