const axios = require("axios");
const conexao = require('./conexao');

var clientes = [];
var validos = 0;
var invalidos = 0;

function buscar_clientes() {
    return new Promise((resolve, reject)=>{
        const sql = "SELECT id, nome, celular FROM clientes;";
        conexao.query(sql, function (err, result, fields) {
            if (err){
                reject(err);
            }else{
                clientes = JSON.parse(JSON.stringify(result));
                resolve("OK");
            }
          });
    })
}

function verificar_zap_valido(cel){
    const formatado = cel.replace(/\D+/g, "");
    return new Promise((resolve, reject) =>{
        axios.post('http://localhost:5000/zap_valido',{cel: formatado})
            .then((res)=>{
                resolve(res.data.error);
            })
            .catch((erro)=>{
                reject(erro);
            });
    })
}

async function testar() {
    let cli = await buscar_clientes();
    if(cli == 'OK'){

        for (const [index, cliente] of clientes.entries()) {
            const resultado = await verificar_zap_valido(cliente.celular);
            if(resultado == 'nao'){
                validos ++;
                console.log(cliente.nome,"possui ZAP válido:", cliente.celular);
                let sql = `UPDATE clientes SET zap_valido= 'sim' WHERE id= ${cliente.id}`;
                conexao.query(sql, function (err, result, fields) { if (err){ console.log(err); } });
            }else{
                invalidos++;
                console.log("ZAP Inválido: ", index);
                let sql = `UPDATE clientes SET zap_valido= 'nao' WHERE id= ${cliente.id}`;
                conexao.query(sql, function (err, result, fields) { if (err){ console.log(err); } });
            }
        }

    }else{
        console.log("Erro ao buscar clientes no BD");
    }

    console.log(validos,"Clientes possuem WhatsApp válidos");
    console.log(invalidos,"Clientes possuem WhatsApp válidos");
    
    process.exit(0);
}


testar();