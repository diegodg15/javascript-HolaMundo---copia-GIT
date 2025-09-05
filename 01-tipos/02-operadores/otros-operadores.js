
//OPERADORES DE typeof, instanceof, delete y operador ternario:

//TYPEOF
/**Operador unario que verifica el tipo de operando (operando * operador --> multiplicando * multiplicador). Este operador devuelve una cadena con el nombre del tipo de dato.*/
{
    let year = 10191;
    console.log(typeof year); // -> number
    console.log(typeof false); // -> boolean
}
//------------------------------------------------------------------

//INSTANCEOF
/**Es un operador binario que comprueba si un objeto es de algún tipo.*/
//instanceof actúa sobre matrices(arrays).
{
    let names = ["Patti", "Bob"];
    let name = names[0];
    console.log(names instanceof Array); // -> true
    console.log(name instanceof Array); // -> false
}
//------------------------------------------------------------------

//DELETE
/**Permite eliminar un campo seleccionado del objeto cuyo nombre se indica con un operando.*/
//delete actúa sobre objetos(object) 
{
    let user = {
        name: "Alice",
        age: 38
    };
    console.log(user.age); // -> 38
    delete user.age;
    console.log(user.age); // -> undefined
}
//------------------------------------------------------------------

//TERNARIO
/**Único operador que utiliza tres operandos. El operador ternario es un operador condicional igual a una instruccion condicional if(). Este operador se utiliza con mayor frecuencia para colocar uno de los dos valores en la variable según una condición determinada.  */
{
    console.log(true ? "Alice" : "Bob"); // -> Alice
    console.log(false ? "Alice" : "Bob"); // -> Bob
    //console.log(condicion ? si es verdadero true : si es falso false);
}
{
    let name = 1 > 2 ? "Alice" : "Bob";
    console.log(name); // -> Bob
}