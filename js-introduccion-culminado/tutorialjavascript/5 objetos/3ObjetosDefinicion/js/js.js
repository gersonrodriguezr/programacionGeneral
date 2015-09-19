function verSeleccion (form)
{
    var ventana;
    ventana = window.open("","",'width=340','height=150');
    ventana.document.write("<B>Has elegido el siguiente viaje:</B><br>");


    posSalida = parseInt(form.elmSalida.selectedIndex);
    nomSalida = form.elmSalida.options[posSalida].value;

    if(form.elmSalida.options[posSalida].value == "")
    {
        alert("No escogio ninguna ciudad");
    }


    posLlegada = form.elmLlegada.selectedIndex;
    nomLlegada = form.elmLlegada.options[posLlegada].text;




    for(i = 0; i< form.elmMedio.length; i++)
    {
        if(form.elmMedio[i].checked)
            nomMedio = form.elmMedio[i].value;
    }


    ventana.document.write("<b>Salida:</b>");
    ventana.document.write(nomSalida + "</br>");

    ventana.document.write("<b>Llegada:</b>");
    ventana.document.write(nomLlegada + "</br>");

    ventana.document.write("<b>Medio:</b>");
    ventana.document.write(nomMedio + "</br>");
}