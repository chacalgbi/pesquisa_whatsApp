var faker = require('faker-br');
const conexao = require('../conexao');
const time = require('../config/dataHora');

function gravar(){
    return new Promise((resolve, reject)=>{
        let pergunta = faker.lorem.paragraph();
        let titulo = faker.lorem.sentence();
        let sql = `INSERT INTO perguntas (titulo, pergunta) VALUES ('${titulo}', '${pergunta}')`;
        conexao.query(sql, function(erro, resultado, parametros){
            if(erro){
                reject(erro);
                
            }else{
                resolve("Pergunta Gravada com sucesso!");
            }
        });
    });
}

async function chamar(){
    for (let index = 0; index < 50; index++) {
        console.log(index);
        await gravar().then((res)=>{
            console.log(time(),res);
        }).catch((er)=>{
            console.log(time(),er);
        });
    }
}

chamar()