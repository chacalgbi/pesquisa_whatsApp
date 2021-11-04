const conexao = require('../conexao');

class PesquisasRealizadas{

    async listar(req, res){
        const texto = "Listar Pesquisas Realizadas";
        console.log(`Acessou ${texto}`);

        let sql = "SELECT *, DATE_FORMAT(hora, '%d/%m/%Y %H:%i') as data FROM pesquisas_realizadas";
        await conexao.query(sql, function(erro, resultado, parametros){
            if(erro){
                console.log(`Erro ao ${texto}`);
                console.log(erro.sqlMessage);
                return res.status(500).json({
                    error: 'sim',
                    code: 500,
                    msg: `Erro ao ${texto}`,
                    msgError: erro.sqlMessage
                });
            }else{
                var resposta = JSON.parse(JSON.stringify(resultado));
                console.log(`Sucesso ao ${texto}!`);
                return res.status(200).json({
                    error: 'nao',
                    code: 200,
                    msg: `Sucesso ao ${texto}`,
                    resposta: resposta
                });
            }
        });
    }

    async cadastrar(req, res){
        const texto = "Cadastrar Pesquisa Realizada";
        console.log(`Acessou ${texto}`);
        const topico = req.body.topico;
        const pergunta = req.body.pergunta;
        const usuario = req.body.usuario;  
        const qtd_clientes = req.body.qtd_clientes;      
      
        let sql = `INSERT INTO pesquisas_realizadas (topico, pergunta, usuario, qtd_clientes) VALUES ('${topico}', '${pergunta}', '${usuario}', '${qtd_clientes}')`;
        await conexao.query(sql, function(erro, resultado, parametros){
            if(erro){
                console.log(`Erro ao ${texto}`);
                console.log(erro.sqlMessage);
                return res.status(500).json({
                    error: 'sim',
                    code: 500,
                    msg: `Erro ao ${texto}`,
                    msgError: erro.sqlMessage
                });
            }else{
                var resposta = JSON.parse(JSON.stringify(resultado));
                console.log(`Sucesso ao ${texto}!`);
                return res.status(200).json({
                    error: 'nao',
                    code: 200,
                    msg: `Sucesso ao ${texto}`,
                    resposta: resposta
                });
            }
        });

    }

}

module.exports = new PesquisasRealizadas();