const { Router } = require("express");
const Usuarios = require('./controllers/usuarios');
const Clientes = require('./controllers/clientes');
const Perguntas = require('./controllers/perguntas');
const Pesquisas = require('./controllers/pesquisas');
const Venom = require('./controllers/venom');
const time = require('./config/dataHora');
const conexao = require('./conexao');

//Middlewares
function validarLogin(req, res, next){
    console.log(time(),"Validando Login");
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const sql = `SELECT * FROM usuarios WHERE usuario = '${usuario}' AND senha = '${senha}';`;

    conexao.query(sql, function (err, result, fields) {
        if (err){
            console.log(time(),"Erro ao bucar no BD");
            return res.status(200).json({
                error: true,
                code: 404,
                msg: "Erro ao Buscar no Banco de Dados",
                err: err
            });
        }else{
            const resposta = JSON.parse(JSON.stringify(result));
            //console.log(time(),resposta[0]);
            if(resposta.length === 0){
                console.log(time(),"Login Invalido");
                return res.status(200).json({
                    error: "true",
                    code: 401,
                    msg: "Usuário ou senha inválidos"
                });
            }else if(resposta.length === 1){
                console.log(time(),"Login OK");
                return res.status(200).json({
                    error: "false",
                    code: 200,
                    msg: "LOGIN OK",
                    resposta: resposta[0]
                });
            }

        }
    });

}

const routes = new Router();

// Usuarios
routes.get('/listar_usuarios', Usuarios.listar);
routes.get('/mostrar_usuario/:id', Usuarios.mostrar);
routes.post('/cadastrar_usuario', Usuarios.cadastrar);
routes.put('/editar_usuario', Usuarios.editar);
routes.delete('/deletar_usuario/:id', Usuarios.deletar);

// Clientes
routes.get('/listar_clientes', Clientes.listar);
routes.get('/mostrar_cliente/:id', Clientes.mostrar);
routes.post('/cadastrar_cliente', Clientes.cadastrar);
routes.put('/editar_cliente', Clientes.editar);
routes.delete('/deletar_cliente/:id', Clientes.deletar);

// Perguntas
routes.get('/listar_perguntas', Perguntas.listar);
routes.get('/mostrar_pergunta/:id', Perguntas.mostrar);
routes.post('/cadastrar_pergunta', Perguntas.cadastrar);
routes.put('/editar_pergunta', Perguntas.editar);
routes.delete('/deletar_pergunta/:id', Perguntas.deletar);

// Pesquisas
routes.get('/listar_pesquisas', Pesquisas.listar);
routes.get('/mostrar_pesquisa/:id', Pesquisas.mostrar);
routes.post('/cadastrar_pesquisa', Pesquisas.cadastrar);
routes.put('/editar_pesquisa', Pesquisas.editar);
routes.delete('/deletar_pesquisa/:id', Pesquisas.deletar);

//LOGIN
routes.post('/login/', validarLogin);

routes.post('/enviar_pesquisa', Venom.enviar);

module.exports = routes;