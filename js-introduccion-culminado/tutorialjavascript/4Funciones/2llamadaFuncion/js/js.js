var entero = prompt("Introduce ");
    if(isNaN(entero))
    {
        alert("El valor introducido no es un numero entero,");
    }
    else{

        entero = parseInt(entero);
        alert("Factorial de :" + entero + " es " + factorial(entero));
    }

function factorial (numero){

    if(numero >1)
        return numero * factorial(numero -1);
    else
     return numero;
}