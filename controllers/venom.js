const venom = require('venom-bot');
const time = require('../config/dataHora');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(time(),erro);
  });

function start(client) {
  client.onMessage((message) => {
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