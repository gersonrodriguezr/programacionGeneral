var operacion;
var num1;
var num2;
var aux;



do{
    num1 = prompt("Introduzca el numero1: ");

    if(isNaN(num1)){
        alert("El valor introducido no es un numero");
    }
}while(isNaN(num1));

do{
    num2 = prompt("Introdusca el numero2: ");

    if(isNaN(num2)){
        alert("El valor introducido no es un numero");
    }

}while(isNaN(num2));

num1 = parseInt(num1);
num2 = parseInt(num2);

while (aux != 1)
{
    operacion = prompt("Listado de operaciones: \n+ sumar \n- restar \n* multiplicar \n/ dividir \n% modulo");
    switch(operacion){
        case "+": alert(num1+num2);aux = 1;break;
        case "-": alert(num1-num2);aux = 1;break;
        case "*": alert(num1*num2);aux = 1;break;
        case "/": alert(num1/num2);aux = 1;break;
        case "%": alert(num1%num2);aux = 1;break;
        default: alert("Opción no valida"); break;
    }
}
