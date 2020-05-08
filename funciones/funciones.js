function validar()
{
    var nombreyapellido, mensaje, email;
    nombreyapellido = document.getElementById("txtNombreyApellido").value;
    mensaje = document.getElementById("txtMensaje").value;
    email = document.getElementById("txtEmail").value;
    if(nombreyapellido === "" || mensaje === "" || email === "" )
    {
        alert("Los campos son obligatorios para conectarte conmigo");
    }
    if((nombreyapellido != "") && (mensaje != "") && (email != ""))
    {
        alert("Mensaje enviado");
    }
    
}
