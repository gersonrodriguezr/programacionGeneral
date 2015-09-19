Mes = new Array();
Dias = new Array();
Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
Dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];


function imprimir(){
    alert("aaa");
    document.write("Fecha = " + convertir(new Date()));
}

function convertir(fecha){
    dia = Dias[fecha.getDay()];
    mes = Meses[fecha.getMonth()];
    anio = fecha.getYear();

    if(navigator.appName = "Netscape")/*No es necesario, pero por el explorador lo uso, si no me sale un formato raro*/
        anio += 1900;

    return dia + "," + fecha.getDate() + "de" + mes + " de " + anio;
}