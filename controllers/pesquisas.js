const conexao = require('../conexao');

class Pesquisas{

    async listar(req, res){
        const texto = "Listar Pesquisas";
        console.log(`Acessou ${texto}`);

        let sql = "SELECT *, DATE_FORMAT(data_hora, '%d/%m/%Y %H:%i') as data FROM pesquisas";
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

    async mostrar(req, res){
        const id = req.params.id;
        const texto = "Mostrar Pesquisas";
        console.log(`Acessou ${texto}`);

        let sql = `SELECT * FROM pesquisas WHERE id=${id}`;
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
        const texto = "Cadastrar Pesquisa";
        console.log(`Acessou ${texto}`);
        const usuario = req.body.usuario;
        const titulo = req.body.titulo;
        const pergunta = req.body.pergunta;       
      
        let sql = `INSERT INTO pesquisas (usuario, titulo, pergunta) VALUES ('${usuario}', '${titulo}', '${pergunta}')`;
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
    
    async editar(req, res){
        const texto = "Editar Pesquisa";
        console.log(`Acessou ${texto}`);
        const id = req.body.id;
        const usuario = req.body.usuario;
        const titulo = req.body.titulo;
        const pergunta = req.body.pergunta;  
        
        let sql = `UPDATE pesquisas SET usuario= '${usuario}', titulo= '${titulo}', pergunta= '${pergunta}'  WHERE id= ${id}`;
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
    
    async deletar(req, res){
        const id = req.params.id;
        const texto = "Deletar Pesquisa";
        console.log(`Acessou ${texto}`);

        let sql = `DELETE FROM pesquisas WHERE id=${id}`;
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

module.exports = new Pesquisas();