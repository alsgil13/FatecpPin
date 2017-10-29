var app = require('./config/express')();

console.log("Carregando móóóódulo");

app.listen(3009,function(){
    console.log("servidor rodando");
});