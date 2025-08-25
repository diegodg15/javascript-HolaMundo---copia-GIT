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