const { Router } = require("express");
const Usuarios = require('./controllers/usuarios');
const Clientes = require('./controllers/clientes');
const Perguntas = require('./controllers/perguntas');
const Pesquisas = require('./controllers/pesquisas');
const Venom = require('./controllers/venom');


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

module.exports = routes;