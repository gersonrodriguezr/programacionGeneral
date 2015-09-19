!--Usamos el arbol de nodos de una web--!

<html>
<head>
    <meta charset="UTF-8" />
	<title>3Arbol de nodos</title>
    <script type="text/javascript" src="js/js.js"></script>
    <link rel = "stylesheet" type = "text/css" href="css/css.css">
</head>
<body>
    <form name = "form1" method = "post" action = "">
        <h1 align="center" class = "fTitulo">Seleccione Viaje</h1>
        <table>
            <tr>
                <td valign = "top" bgcolor = "#99ccff">
                    <p><b>Lugar de salida :</b>
                    <select size = 1 name = "elmSalida">
                        <option value = "" selected>Selecciona lugar de salida</option>
                        <option value = "Oviedo">Oviedo</option>
                        <option value = "Madrid">Madrid</option>
                        <option value = "Barcelona">Barcelona</option>
                        <option value = "Sevilla">Sevilla</option>
                    </select>
                    </p>

                    <p><b>Lugar de llegada :</b>
                    <select size = "3" name = "elmLlegada" multiple>
                        <option>Londres</option>
                        <option>Roma</option>
                        <option>París</option>
                        <option selected>Londres</option>
                    </select>
                    </p>

                    <p><b>Medio de transporte: </b>
                        <input type = "radio"  name = "elmMedio" value = "Avión" checked>Avion
                        <input type = "radio"  name = "elmMedio" value = "tren">Tren
                        <input type = "radio"  name = "elmMedio" value = "Autobús">Autobús
                        <input type = "button" name = "elmVer" value = "Ver viaje" onclick = verSeleccion(this.form)>
                    </p>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>