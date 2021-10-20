const venom = require('venom-bot');
const time = require('../config/dataHora');
const conexao = require('../conexao');
var envio

venom.create(
  (statusSession, session) => {
    console.log(time(),'Status Session: ', statusSession);
    console.log(time(),'Session name: ', session);
  }
).then((client) => start(client)).catch((erro) => { console.log(time(),erro); });

function start(client) {
  envio = client;
  client.onMessage((message) => {
    envio = client;
    if (message.body === 'Oi' && message.isGroupMsg === false) {
      client.sendText(message.from, 'Welcome Venom 🕷').then((result) => {
          console.log(time(),'Respondido para: ', message.sender.pushname, " - ", message.sender.formattedName);
        })
        .catch((erro) => {
          console.error(time(),'Erro ao enviar a MSG: ', erro);
        });
    }
  });
}

class Zap{

  async enviar(req, res){
    const texto = "Enviar Pesquisa";
    console.log(time(),`Acessou ${texto}`);


    const usuario = req.body.usuario;
    const titulo = req.body.titulo;
    const cliente = req.body.cliente;
    const pergunta = String("Olá " + cliente + ". " + req.body.pergunta);
    const cel = String("55" + req.body.cel + "@c.us");


    await envio.sendText(cel, pergunta).then((result) => {
      //console.log(time(),'Pesquisa Enviada:', result);
      let idchat = result.to.remote._serialized;
      let sql = `INSERT INTO pesquisas (usuario, cliente, idchat, titulo, pergunta) VALUES ("${usuario}","${cliente}","${idchat}","${titulo}","${pergunta}")`;
      conexao.query(sql, function (err, result, fields) {
        if (err){
            console.log(time(),"Erro ao gravar no BD");
            return res.status(200).json({
                error: true,
                code: 404,
                msg: "Erro ao Buscar no Banco de Dados",
                err: err
            });
        }else{
            const resposta = JSON.parse(JSON.stringify(result));
            //console.log(time(),resposta[0]);
            console.log(time(),"Pesquisa Enviada e Gravada");
            return res.status(200).json({
                error: "false",
                code: 200,
                msg: "Pesquisa Enviada e Gravada"
            });
        }
    });
    })
    .catch((erro) => {
      console.error(time(),"Erro ao Enviar a Pesquisa");
      return res.status(200).json({
          error: true,
          code: 404,
          msg: "Erro ao Enviar a Pesquisa",
          err: err
      });
    });

  }

}

module.exports = new Zap();