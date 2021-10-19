const app = require('./app');
const conexao = require('./conexao');
const time = require('./config/dataHora');

conexao.connect(function(err) {
    if(err){
        console.log(time(),"Erro ao Conectar no Banco de Dados!");
        console.log(time(),err);
    }else{
        console.log(time(),"Conectado no Banco de Dados!");
    }
});


app.listen(5000, () => {
 console.log(time(),"Servidor iniciado na porta 5000");
});