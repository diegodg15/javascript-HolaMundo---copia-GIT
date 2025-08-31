//OPERADORES DE CADENA:

/* El único operador en este grupo es la concatenación. + Este operador convertirá todo a una cadena si alguno de los operandos es de tipo cadena. Finalmente, creará una nueva cadena de caracteres, añadiendo el operando derecho al final del izquierdo.
 */

{
    let greetings = "Hi";
    console.log(greetings + " " + "Alice"); // -> Hi Alice

    let sentence = "Happy New Year ";
    let newSentence = sentence + 10191;

    console.log(newSentence); // -> Happy New Year 10191
    console.log(typeof newSentence); // -> string
}
//--------------------------------------------------------------------

//OPERADORES DE ASIGNACIÓ COMPUESTOS:

/* Probablemente pueda adivinar que este operador también puede usarse junto con el operador de reemplazo. Su funcionamiento es tan intuitivo que nos detendremos en un ejemplo sencillo: */

{
    let sentence = "Happy New ";
    sentence += "Year ";
    sentence += 10191;
    console.log(sentence); // -> Happy New Year 10191
}


