module.exports = function formatar_celular(num){
    let formatado = num.replace(/\D+/g, "");
    let final = '';
    if(formatado.length == 11){
        final = formatado.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1) $2-$3");
    }else if(formatado.length == 10){
        final = formatado.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1) 9$2-$3");
    }else if(formatado.length ==  9){
        final = formatado.replace(/(\d{5})?(\d{4})/, "(77) $1-$2");
    }else if(formatado.length ==  8){
        final = formatado.replace(/(\d{4})?(\d{4})/, "(77) 9$1-$2");
    }else{
        final = "erro";
    }
    return final;
}

console.log("01 - ",formatar_celular("8888-8888"));
console.log("02 - ",formatar_celular("88885555"));
console.log("03 - ",formatar_celular("9 8888-5555"));
console.log("04 - ",formatar_celular("9.88885555"));
console.log("05 - ",formatar_celular("9.8888-5555"));
console.log("06 - ",formatar_celular("77 8888-5555"));
console.log("07 - ",formatar_celular("(77) 8888-5555"));
console.log("08 - ",formatar_celular("(77)8888-5555"));
console.log("09 - ",formatar_celular("77 988885555"));
console.log("10 - ",formatar_celular("(77)988885555"));
console.log("11 - ",formatar_celular("77988885555"));
console.log("12 - ",formatar_celular("77988885555445"));