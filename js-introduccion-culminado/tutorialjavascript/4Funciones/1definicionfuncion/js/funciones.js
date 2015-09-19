function pulsar(){
    var respuesta;

    respuesta = prompt("¿Estas seguro que deseas realizar esta operación?","");

    if(respuesta){
        alert("Has respondido:"+respuesta);
    }else{
        alert("Ha reusado contestar");
    }
}