const conexao = require('../conexao');

class Perguntas{

    async listar(req, res){
        const texto = "Listar Perguntas";
        console.log(`Acessou ${texto}`);

        let sql = "SELECT *, DATE_FORMAT(data_hora, '%d/%m/%Y %H:%i') as data FROM perguntas";
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
        const texto = "Mostrar Pergunta";
        console.log(`Acessou ${texto}`);

        let sql = `SELECT * FROM perguntas WHERE id=${id}`;
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
        const texto = "Cadastrar Pergunta";
        console.log(`Acessou ${texto}`);
        const titulo = req.body.titulo;
        const pergunta = req.body.pergunta;       
      
        let sql = `INSERT INTO perguntas (titulo, pergunta) VALUES ('${titulo}', '${pergunta}')`;
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
        const texto = "Editar Pergunta";
        console.log(`Acessou ${texto}`);
        const id = req.body.id;
        const titulo = req.body.titulo;
        const pergunta = req.body.pergunta; 
        

        let sql = `UPDATE perguntas SET titulo= '${titulo}', pergunta= '${pergunta}'  WHERE id= ${id}`;
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
        const texto = "Deletar Pergunta";
        console.log(`Acessou ${texto}`);

        let sql = `DELETE FROM perguntas WHERE id=${id}`;
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

module.exports = new Perguntas();