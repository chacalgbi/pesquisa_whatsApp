$('#formLogin').submit(function(e){
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());    
    var password = $.trim($("#password").val());    
     
    if(usuario.length == "" || password == ""){
       Swal.fire({
           type:'warning',
           title:'Você deve inserir um nome de usuário e / ou senha',
       });
       return false; 
     }else{
         $.ajax({
            url:"controller/login.php",
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password}, 
            success:function(data){               
                if(data == "null"){
                    Swal.fire({
                        type:'error',
                        title:'Nome de usuario e / ou senha incorretos',
                    });
                }else{
                    Swal.fire({
                        type:'success',
                        title:'Conexão bem sucedida!',
                        confirmButtonColor:'#3085d6',
                        confirmButtonText:'Acessar'
 
                    }).then((result) => {

                        window.location.href = "app/";

                        /*if(result.value){ 
 
                         var receber = JSON.parse(data);
 
                         checkadmin = receber[0].admin_sistema
                         checkpermit = receber[0].permite_troca_senha
                        
                         /*
                         if (checkadmin == 'N' && checkpermit == 'S') {
 
                             //window.location.href = "app/meu-perfil.php";
                 
                         } else if (checkadmin == 'N' && checkpermit == 'N'){
 
                            // window.location.href = "app/conexoes.php";
 
                         }else{
 
                            window.location.href = "app/";
                         }
                         */
                     /*}*/
                 })
               }
            }    
       });
     }     
 });