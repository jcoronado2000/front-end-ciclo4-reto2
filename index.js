/**
 * EndPoint
 */

 const endPointUser = "http://localhost:8080/api/user";
 //const endPointUser = "http://144.22.231.114:8080/api/user"

 let email ;
 let password ;

 function iniciarSesion(){
    console.log(endPointUser+"/"+email+"/"+password);
    $.ajax({
        method:"GET",
        url: endPointUser+"/"+email+"/"+password,
        success: function (data) {
            if(data.id){
                swal("Bienvenido", data.name, "success")
                .then((value)=>{
                    window.location.href="administracionUsuarios.html";
                });
            }else{
                swal("info", "No existe un usuario", "warning");
            }
            console.log(data);
        }
    });

 }


 function validarDatos(){

    email = $("#exampleInputEmailInicio").val();
    password = $("#exampleInputPasswordInicio").val();

    if(email == "" || password == ""){
        swal("info", "Hay campos vacios", "warning");
    }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
        swal("info", "Email invalido", "warning");
    }else{
       iniciarSesion();
    }

    
}