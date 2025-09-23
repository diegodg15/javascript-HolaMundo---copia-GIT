
//OPERADORES TYPEOF INTSNTACEOF

//typeOf
{
    let year = 10191;
    console.log(typeof year); // -> number
    console.log(typeof false); // -> boolean
}

//instanceOf

/* Elinstancia deEl operador apareció al hablar de matrices. Es un operador binario que comprueba si un objeto (operando izquierdo) es de algún tipo (operando derecho). Según el resultado de la prueba, devuelve verdadero o falso.
 */

{
    let names = ["Patti", "Bob"];
    let name = names[0];
    console.log(names instanceof Array); // -> true
    console.log(name instanceof Array); // -> false
}