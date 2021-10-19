const conexao = require('../conexao');

class Clientes{

    async listar(req, res){
        const texto = "Listar Clientes";
        console.log(`Acessou ${texto}`);

        let sql = "SELECT *, DATE_FORMAT(data_hora, '%d/%m/%Y %H:%i') as data FROM clientes";
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
        const texto = "Mostrar Cliente";
        console.log(`Acessou ${texto}`);

        let sql = `SELECT * FROM clientes WHERE id=${id}`;
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
        const texto = "Cadastrar Cliente";
        console.log(`Acessou ${texto}`);
        const nome = req.body.nome;
        const celular = req.body.celular;
        const zap_valido = req.body.zap_valido;
        const receber_pesquisa = req.body.receber_pesquisa;

      
        let sql = `INSERT INTO clientes (nome, celular, zap_valido, receber_pesquisa) VALUES ('${nome}', '${celular}', '${zap_valido}', '${receber_pesquisa}')`;
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
        const texto = "Editar Cliente";
        console.log(`Acessou ${texto}`);
        const id = req.body.id;
        const nome = req.body.nome;
        const celular = req.body.celular;
        const zap_valido = req.body.zap_valido;
        const receber_pesquisa = req.body.receber_pesquisa;


        let sql = `UPDATE clientes SET nome= '${nome}', celular= '${celular}', zap_valido= '${zap_valido}', receber_pesquisa= '${receber_pesquisa}'  WHERE id= ${id}`;
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
        const texto = "Deletar Cliente";
        console.log(`Acessou ${texto}`);

        let sql = `DELETE FROM clientes WHERE id=${id}`;
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

module.exports = new Clientes();