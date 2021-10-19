const Banco_Dados = require('mysql');

module.exports = Banco_Dados.createConnection({
    host: "10.0.0.101",
    user: "root",
    password: "root",
    database: "pesquisa"
})
