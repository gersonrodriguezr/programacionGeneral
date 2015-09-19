/*Me parece que al colocar el this. automaticamente se inicializan, ya no es necesario definir primero el atributo como en java, son las propiedades*/
function persona(nombre, apellido, localidad,pais){
    this.nombre = nombre;
    this.nombre = nombre;
    this.apellido = apellido;
    this.localidad = localidad;
    this.pais = pais;

    this.Obtener_Datos = Obtener_Datos;//metodos, estos ya no lleva parentesis como en java./*Referencia a la misma*//*Consultar*/
    /*http://www.jasoft.org/Blog/post/Escribiendo-codigo-JavaScript-limpio-funciones-anonimas-auto-ejecutables.aspx*/
}

function Obtener_Datos(){
    var datos = (this.nombre + " " + this.apellido + " " + this.localidad + " (" + this.pais + " )");
    return datos;
}