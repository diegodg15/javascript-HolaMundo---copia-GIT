/**FUNCIONES */

function saludar() {
    console.log("Hola");
}

saludar();
//-------------------------
//Pasar una variable a una funcion:
function saludar(nombre) {
    console.log("Hola " + nombre);
}

let miNombre = "D";
saludar(miNombre);  // → Hola D
//-------------------------
function sumar(a, b) {
    return a + b;
}

let x = 5;
let y = 8;
console.log(sumar(x, y));  // → 13

//-------------------------
function suma() {
    return 2 + 2;
}

let resultado = suma();
console.log(suma());

//--------------------------------
let suma2 = function (n1, n2) {
    return n1 + n2;
}
console.log(suma2(2, 3));

//---------------------------------
//Impresión console.log
let n3 = 5;
function a() {
    let n3 = 10;
    return console.log(n3);
}
a();             // Imprime 10
console.log(n3);  // Imprime 5
console.log(a()); // Imprime 10 y luego undefined-->console.log() = undefined
// Porque console.log(n) no retorna ningún valor útil—su retorno es undefined. Entonces, la función a() retorna el resultado de console.log(n), que es undefined. 

/**Esto está haciendo:
 * let resultado = console.log(10); // Esto imprime 10 y guarda "undefined"
console.log(resultado);          // Imprime undefined
 */
//Solucion:
function a() {
    let n = 10;
    return n;
}
console.log(a());  // Aquí sí se imprime el valor retornado: 10


//TODO LO QUE ESTÁ DESPUÉS DE RETURN, NO LO EJECUTA LA FUNCION
function a() {
    let n7 = 10;
    return n7;           // Aquí termina la función. Nada después se ejecuta.
    console.log(n7);     // Esto NUNCA se ejecuta.
}

function a() {
    let n71 = 10;
    console.log(n71);     // Esto se ejecuta
    return n71;           // Aquí termina la función. Nada después se ejecuta.
}
//--------------------------------
const halve = function (n6) {
    let resultado = n6 / 2;
    console.log(resultado);     // Imprime el resultado dentro de la función
    return resultado;
};

let n6 = 10;

console.log(halve(100));      // Imprime: 50 (desde adentro), luego 50 (por return)
console.log(n6);              // Imprime: 10 (la variable externa sigue intacta)

let numero4 = 24;
halve(numero4);               // Imprime: 12 (por el console.log dentro de la función)
