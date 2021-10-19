const conexao = require('../conexao');

class Usuarios{

    async listar(req, res){
        const texto = "Listar Usuarios";
        console.log(`Acessou ${texto}`);

        let sql = "SELECT *, DATE_FORMAT(data_hora, '%d/%m/%Y %H:%i') as data FROM usuarios";
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
        const texto = "Mostrar Usuario";
        console.log(`Acessou ${texto}`);

        let sql = `SELECT * FROM usuarios WHERE id=${id}`;
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
        const texto = "Cadastrar Usuario";
        console.log(`Acessou ${texto}`);
        const usuario = req.body.usuario;
        const senha = req.body.senha;
        const admin = req.body.admin;
      
        let sql = `INSERT INTO usuarios (usuario, senha, admin) VALUES ('${usuario}', '${senha}', '${admin}')`;
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
        const texto = "Editar Usuario";
        console.log(`Acessou ${texto}`);
        const id = req.body.id;
        const usuario = req.body.usuario;
        const senha = req.body.senha;
        const admin = req.body.admin


        let sql = `UPDATE usuarios SET usuario= '${usuario}', senha= '${senha}', admin= '${admin}'  WHERE id= ${id}`;
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
        const texto = "Deletar Usuario";
        console.log(`Acessou ${texto}`);

        let sql = `DELETE FROM usuarios WHERE id=${id}`;
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

module.exports = new Usuarios();