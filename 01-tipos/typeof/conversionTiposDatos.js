/**
 * Existen diferentes formas de hacer una conversión de tipos de datos,
 * la primera es con el atribut Number 
 * 
 * 
 * 
 */

console.log( Number(cx)); 
console.log(typeof cx)
let xc ="123b"
console.log(parseInt("123b"))
console.log(typeof xc)


let entero = parseInt("42b");
console.log(typeof entero); // "number"

let decimal = parseFloat("3.14");
console.log(typeof decimal); // "number"

let numeroOriginal= "4321b"
console.log(typeof (numeroOriginal) , "", numeroOriginal);
let numeroConvertido = parseInt(numeroOriginal);
console.log(typeof(numeroConvertido), numeroConvertido)