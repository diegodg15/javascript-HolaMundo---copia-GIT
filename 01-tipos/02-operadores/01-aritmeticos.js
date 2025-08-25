let a = 5;
let b = 3;
//Esto es una declaracion
console.log(a + b, "suma");
console.log(a - b, "resta");
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
//Esto es una expresion

//Operadores de incremento y decremento
console.log(++a);
//Imprime 6, este es preincremento
console.log(a++)
//Imprime 6 y luego 7, este es postincrmeento
console.log(a);

{
    console.log(2 + 2 * 2); // -> 6
    console.log(2 + (2 * 2)); // -> 6
    console.log((2 + 2) * 2); // -> 8

}
{
    const x = 5;
    const y = 2;

    console.log("addition: ", x + y); // -> 7
    console.log("subtraction: ", x - y); // -> 3
    console.log("multiplication: ", x * y); // -> 10
    console.log("division: ", x / y); // -> 2.5
    console.log("division remainder :", x % y); // -> 1
    console.log("exponent: ", x ** y); // -> 25
}

//OPERADORES ARITMÉTICO UNARIOS
{
    let str = "123";
    let n1 = +str;//También sirve para la conversión rápidad de tipos.
    let n2 = -str;
    let n3 = -n2;
    let n4 = +"abcd";
    console.log(`${str} : ${typeof str}`); // -> 123 : string
    console.log(`${n1} : ${typeof n1}`); // -> 123 : number
    console.log(`${n2} : ${typeof n2}`); // -> -123 : number
    console.log(`${n3} : ${typeof n3}`); // -> 123 : number
    console.log(`${n4} : ${typeof n4}`); // -> NaN : number

}



