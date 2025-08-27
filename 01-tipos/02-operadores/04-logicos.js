// AND OR NOT

//AND &&
console.log(true && true);//True
console.log(true && false);//False


let mayorEdad = true;
let suscrito = true;
//AND && devuelve el último valor true si los dos datos son true
console.log("operador and", mayorEdad && suscrito);

//OR || devuelve el primer valor true
console.log("operador or", mayorEdad || suscrito);//Devolver true si es que al menos uno de estos dos es true.
//Para que devuelva false, los dos parametros deben ser false.

//NOT !
console.log("operador not", !mayorEdad);//Este operador invierte el true;

let soloCatalogoInfantil = !mayorEdad;

//OPERADORES LÓGICOS
/**
 * AND (&&) --> Funciona como multiplicación lógica.
 * OR (||) --> Funciona como suma lógica. 
 * NOT (!) --> Funciona como negación.
 * Es recomendable estudiar tablas de verdad 
 */
{
    console.log(true && true); // -> true
    console.log(true && false); // -> false
    console.log(false && true); // -> false
    console.log(false && false); // -> false

    console.log(true || true); // -> true
    console.log(true || false); // -> true
    console.log(false || true); // -> true
    console.log(false || false); // -> false

    console.log(!true); // -> false
    console.log(!false); // -> true

    const a = false;
    const b = true;
    const c = false;
    const d = true;

    console.log(a && b && c || d); // -> true
    console.log(a && b && (c || d)); // -> false
}

//---------------------------------------------
/* Operadores lógicos y valores no booleanos
Siempre que los operandos sean de tipo booleano, podemos ver fácilmente el valor devuelto. Sin embargo, estos operadores también pueden usarse con diferentes tipos de datos. El caso más sencillo es el NOT lógico. Primero, el operando se convierte temporalmente a un valor booleano (según las reglas explicadas en el capítulo anterior) y solo entonces se le aplica la acción apropiada (es decir, un valor verdadero se convierte en falso, y viceversa). Por lo tanto, el operador NOT siempre devolverá falso o verdadero. A menudo, se utiliza la doble negación para convertir cualquier tipo a booleano. */

{
    let nr = 0;
    let year = 1970;
    let name = "Alice";
    let empty = "";

    console.log(!nr); // -> true
    console.log(!year); // -> false
    console.log(!name); // -> false
    console.log(!empty); // -> true

    console.log(!!nr); // -> false
    console.log(!!name); // -> true

    console.log(true && 1991); // -> 1991
    console.log(false && 1991); // -> false
    console.log(2 && 5); // -> 5
    console.log(0 && 5); // -> 0
    console.log("Alice" && "Bob"); // -> Bob
    console.log("" && "Bob"); // -> empty string

    console.log(true || 1991); // -> true
    console.log(false || 1991); // -> 1991
    console.log(2 || 5); // -> 2
    console.log(0 || 5); // -> 5
    console.log("Alice" || "Bob"); // -> Alice
    console.log("" || "Bob"); // -> Bob

    let x = 0;
    let y = 0;
    console.log(x++ && y++); // -> 0
    console.log(x); // -> 1
    console.log(y); // -> y == 0
}