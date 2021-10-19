var faker = require('faker-br');
const conexao = require('./conexao');
const time = require('./config/dataHora');

function gravar(){
    return new Promise((resolve, reject)=>{
        let nome = `${faker.name.firstName()} ${faker.name.lastName()}`;
        let celular = faker.phone.phoneNumberFormat();
        let sql = `INSERT INTO clientes (nome, celular, zap_valido, receber_pesquisa) VALUES ('${nome}', '${celular}', 'nao', 'sim')`;
        conexao.query(sql, function(erro, resultado, parametros){
            if(erro){
                reject(erro);
                
            }else{
                resolve("Cliente Gravado com sucesso!");
            }
        });
    });
}

async function chamar(){
    for (let index = 0; index < 20; index++) {
        console.log(index);
        await gravar().then((res)=>{
            console.log(time(),res);
        }).catch((er)=>{
            console.log(time(),er);
        });
    }
}

chamar()