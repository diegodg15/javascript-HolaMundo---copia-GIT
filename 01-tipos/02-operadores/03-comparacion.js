let a = 10;
console.log(a > 5);//Boolean False
console.log(a >= 5);//True
console.log(a < 5);//False
console.log(a <= 5);//True

//Operadores de igualdad:

console.log(a == 10);//True
console.log(a != 10);//False
console.log(a == "10");//True
// El operador de doble igualdad solamente pregunta si los valores son iguales, no si los tipos son iguales.
console.log(a === 10);//True
console.log(a !== 10);//False
// Es recomendable y buena práctica utilizar la igualdad estricta ===.

/**
 * Sí, el comportamiento del operador == en JavaScript está directamente relacionado con que es un lenguaje de tipado débil. Y esto, a su vez, se relaciona con el concepto de tipado dinámico.

Tipado Débil (Weak Typing)
Un lenguaje de tipado débil permite que las variables cambien de tipo o que el intérprete intente realizar conversiones automáticas (coerción de tipo) cuando se realizan operaciones. JavaScript no requiere que declares el tipo de dato de una variable, y es muy flexible con los tipos de datos en las operaciones.

Ejemplo de Tipado Débil:

'5' + 1 resulta en '51'. JavaScript convierte el número 1 a un string para concatenarlo.

'5' == 5 es true. El intérprete convierte el string '5' a un número para la comparación.

En contraste, un lenguaje de tipado fuerte como Java o Python no permitiría estas conversiones automáticas. En esos lenguajes, intentar sumar un string y un número resultaría en un error.

Tipado Dinámico (Dynamic Typing)
Un lenguaje de tipado dinámico no requiere que declares el tipo de una variable de antemano. La variable puede contener cualquier tipo de dato y su tipo se determina y puede cambiar durante la ejecución del programa.

Ejemplo de Tipado Dinámico:

let variable = "hola"; // La variable es de tipo string
variable = 10;          // Ahora la misma variable es de tipo number
variable = true;        // Y ahora es de tipo boolean
 */


//------------------------------------------------------------------

//OPERADORES DE COMPARACIÓN:

/* Los operadores de comparación se utilizan para comprobar la igualdad o desigualdad de valores. Todos son binarios y devuelven un valor lógico que representa el resultado de la comparación.verdadero o FALSO.
 */
{
    console.log(10 === 5); // -> false
    console.log(10 === 10); // -> true
    console.log(10 === 10n); // -> false
    console.log(10 === "10"); // -> false
    console.log("10" === "10"); // -> true
    console.log("Alice" === "Bob"); // -> false
    console.log(0 === false); // -> false
    console.log(undefined === false); // -> false
}

{
    console.log(10 == 5); // -> false
    console.log(10 == 10); // -> true
    console.log(10 == 10n); // -> true
    console.log(10 == "10"); // -> true
    console.log("10" == "10"); // -> true
    console.log("Alice" == "Bob"); // -> false
    console.log(0 == false); // -> true
    console.log(undefined == false); // -> false
    console.log(NaN == NaN); // -> false
}

{
    console.log(10 !== 5); // -> true
    console.log(10 !== 10); // -> false
    console.log(10 !== 10n); // -> true
    console.log(10 !== "10"); // -> true
    console.log("10" !== "10"); // -> false
    console.log("Alice" !== "Bob"); // -> true
    console.log(0 !== false); // -> true
    console.log(undefined !== false); // -> true
    console.log(10 != 5); // -> true
    console.log(10 != 10); // -> false
    console.log(10 != 10n); // -> false
    console.log(10 != "10"); // -> false
    console.log("10" != "10"); // -> false
    console.log("Alice" != "Bob"); // -> true
    console.log(0 != false); // -> false
    console.log(undefined != false); // -> true
    console.log(NaN != NaN); // -> true
}

{
    console.log(10 > 100); // -> false
    console.log(101 > 100); // -> true
    console.log(101 > "100"); // -> true

    console.log(101 < 100); // -> false
    console.log(100n < 102); // -> true
    console.log("10" < 20n); // -> true

    console.log(101 <= 100); // -> false
    console.log(10 >= 10n); // -> true
    console.log("10" <= 20); // -> true
}

{
    console.log("b" > "a"); // -> true
    console.log("a" > "B"); // -> true
    console.log("B" > "A"); // -> true
    console.log("A" > "4"); // -> true
    console.log("4" > "1"); // -> true

    console.log("ab1" < "ab4"); // -> true
    console.log("ab4" < "abA"); // -> true
    console.log("abB" < "aba"); // -> true
    console.log("aba" < "abb"); // -> true

    console.log("ab" < "ab4"); // -> true
}