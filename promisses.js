let x = false;

function buscar(){
    console.log("Entrou na função Buscar");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
            console.log("Time de 8 segundos");
            if(x){
                resolve("Legal! Deu certo");
            }else{
                reject("Opa! Deu Errado");
            }
        }, 8000);
    });
}

async function usar(){
    await buscar().then((res)=>{
        console.log("Entrou no then: ",res);
    }).catch((erro)=>{
        console.log("Entrou no catch ",erro);
    });

    console.log("FIM - Depois do async");
}


console.log("Inicio");

usar();

console.log("Meio");

console.log("FIM - Sincrono");

console.log("________________________________");