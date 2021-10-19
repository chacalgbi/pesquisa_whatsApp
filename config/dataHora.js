module.exports = function data_hora(){
    var data = new Date();
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos

    var semana = ''
         if(dia_sem == 0){semana = 'DOM '}
    else if(dia_sem == 1){semana = 'SEG '}
    else if(dia_sem == 2){semana = 'TER '}
    else if(dia_sem == 3){semana = 'QUA '}
    else if(dia_sem == 4){semana = 'QUI '}
    else if(dia_sem == 5){semana = 'SEX '}
    else if(dia_sem == 6){semana = 'SAB '}

    var str_data = semana + dia + '/' + (mes+1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg+'.'+mseg+'ms =>';
    var data_hora = str_data + ' ' + str_hora;
    return data_hora;
}