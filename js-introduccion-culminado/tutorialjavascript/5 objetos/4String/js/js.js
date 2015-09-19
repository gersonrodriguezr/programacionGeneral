var cad = "Curso de javaScript -> gerson";

document.write("La cadena es: " + cad + "<br>");
document.write("Longitud: " + cad.length + "<br>");
document.write("Negrita: " + cad.bold() + "<br>");
document.write("El Caracter numero 13 es: " + cad.charAt(13) + "<br>" );
document.write("De color rojo-fontcolor" + cad.fontcolor("#ff0000") + "<br>" );
document.write("Tamaño 10:" + cad.fontsize(10) + "<br>" );
document.write("En cursiva:" + cad.italics() + "<br>" );
document.write("La ultima \"a\" esta en la posición" + cad.lastIndexOf() + "<br>" );
document.write("Convirtiendolo en enlace:" + cad.link("http://www.google.com") + "<br>" );
document.write("Tachada:" + cad.strike() + "<br>" );
document.write("Subindice:" + cad.sub() + "<br>");
document.write("Superindice:" + cad.sup() + "<br>");