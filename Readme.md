Aqui ficarão os comandos, detalhes e bibliotecas utulizadas durante as aulas.

Venom Bot
npm i --save venom-bot

Para Popular as tabelas
https://www.npmjs.com/package/faker-br
npm install faker-br

//Coisas importantes do Venom
-message.body // a mensagem recebida
-message.from // quem enviou a msg
-message.to  //  quem recebeu (Eu)
-message.sender.pushname // Nome de exibição do remetente de msg
-message.sender.formattedName // exibe o cel formatado
-message.chat.isOnline // Verifica se o contato está online

    Criar Tabela de usuários

    usuarios
    -id auto increment
    -usuario varchar(200) not null
    -senha varchar(200) not null
    -data_hora current timestamp    
    -admin  varchar(200) not null

    perguntas
    -id auto increment
    -titulo  varchar(200) not null
    -pergunta text not null
    -data_hora current timestamp

    clientes
    -id auto increment
    -nome varchar(200) not null
    -celular varchar(200) not null
    -data_hora current timestamp
    -zap_valido varchar(200) not null default='nao'
    -receber_pesquisa varchar(200) not null default='sim'

    pesquisas
    -id auto increment
    -usuario varchar(200) not null
    -titulo  varchar(200) not null
    -pergunta text not null
    -data_hora current timestamp

    Para Alterar tabela
    ALTER TABLE pesquisas ADD resposta int(2) AFTER pergunta;
    ALTER TABLE pesquisas ADD finalizado varchar(3) DEFAULT 'nao';