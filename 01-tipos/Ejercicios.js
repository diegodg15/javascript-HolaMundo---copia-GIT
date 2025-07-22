
/*
Ejercicios:
*/
//Ejercicio N°1: Imprimir el primer número divisible por 7 de una sucesión de 20. 
let numero = 20;
for (numero; ; numero++) {
  if (numero % 7 == 0) {
    console.log(numero);
    break;
  }
}
let nombre;
do {
  nombre = prompt("Ingresa tu nombre")
} while (!nombre)//Primero es true si ingresamos algo, pero el operador ! lo cambia a false para salir del bucle. Caso contrario,
console.log(typeof nombre + " " + nombre);//si ingresamos un valor null, lotoma como false pero el operador ! lo cambia a true para seguir en el bucle.
//---------------------------------------------------


//Ejercicio N°2: Imprimir solo el numero 3 de una sucesión numérica.
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log(i);
    break;

  }

}
//---------------------------------------------------


//Sumatoria numeros del 1 al 100
function calcularSuma(n) {
  const formula = `${n} * ${n + 1} / 2`;
  const resultado = n * (n + 1) / 2;

  console.log(`Para n = ${n}:`);
  console.log(`Fórmula: ${formula} = ${resultado}`);
  console.log(`Desglose: ${Array.from({ length: n }, (_, i) => i + 1).join(' + ')} = ${resultado}`);
  console.log(`Pares de Gauss: ${Array.from({ length: n / 2 }, (_, i) => `(${i + 1} + ${n - i})`).join(' + ')}`);

  return resultado;
}

calcularSuma(100);

//---------------------------------------------------
//Ejercicio N°3:
let numero3;
for (numero3 = 0; numero < 12; numero3 += 2) {
  console.log(numero3);
}
//---------------------------------------------------


//Ejercicio N°4:  Declara seis variables y recuerda nombrarlas según su propósito:
/*
El precio de una sola rosa (8) y la cantidad de rosas que tienes (70)
El precio de un solo lirio (10) y la cantidad de lirios que tienes (50)
El precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
*/
const rosa = 8;
const lirio = 10;
const tulipan = 2;

let cantRosa = 70;
let cantLirio = 50;
let cantTulipan = 120;

let precioTotalRosa = rosa * cantRosa;
let precioTotalLirio = lirio * cantLirio;
let precioTotalTulipan = tulipan * cantTulipan;

const precioTotalFlores = precioTotalLirio + precioTotalRosa + precioTotalTulipan;

console.log("Rosa", "precio unitario:" + rosa + "cantidad:" + cantRosa + "valor:" + precioTotalRosa)
console.log("Lirio", "precio unitario:" + lirio + "cantidad:" + cantLirio + "valor:" + precioTotalLirio)
console.log("Tulipan", "precio unitario:" + tulipan + "cantidad:" + cantTulipan + "valor:" + precioTotalTulipan)
console.log("El precio total es: ", precioTotalFlores);

cantRosa -= 20; //cantRosa = cantRosa - 20;
cantLirio -= 30;
console.log(cantRosa);
precioTotalRosa = rosa * cantRosa;
precioTotalRosa = rosa * cantRosa;
precioTotalLirio = lirio * cantLirio;
precioTotalTulipan = tulipan * cantTulipan;

console.log("Rosa", "precio unitario:" + rosa + "cantidad:" + cantRosa + "valor:" + precioTotalRosa)
console.log("Lirio", "precio unitario:" + lirio + "cantidad:" + cantLirio + "valor:" + precioTotalLirio)
console.log("Tulipan", "precio unitario:" + tulipan + "cantidad:" + cantTulipan + "valor:" + precioTotalTulipan)
console.log("El precio total es: ", precioTotalFlores);
//---------------------------------------------------


//Ejercicio N°5:
/*Nuestra tarea consistirá en crear una lista de contactos. 
Inicialmente, la lista será bastante sencilla: solo añadiremos tres 
personas usando los datos que se muestran en la tabla a continuación.
En el resto del curso, volverás a este script y lo ampliarás sistemáticamente con nuevas funciones, 
 utilizando los elementos de JavaScript recién aprendidos. */

//En vez de utilizar 9 variables, mejor utilizar un array por cada variable de persona.
let persona1 = ["Maxwell Wright", "01917196495", "Curabitur.egestas.nuc@nonummyac.co.uk"]
let persona2 = ["Raja Villareal", "08663982895", "pusuere.vulputatesed.com"]
let persona3 = ["Helen Richards", "08001111", "libero@convallis.edu"]

console.log(persona2)
console.log(persona3)
console.log(persona4)
//---------------------------------------------------


//Seccion práctica 2.1.11
//Pregunta 1: Escriba un código que creará variables y las inicializará con valores deBooleano,Número,BigInt,Cadena, y tipos indefinidos utilizando (cuando sea posible) literales y funciones constructoras.
let bool = true;
let boolBoleano = Boolean(bool);
let boolBoleano2 = Boolean(true);

let numeroNuevo = 2;
let conversionNumeroNuevo = Number(numeroNuevo);
let conversionNumeroNuevo2 = Number(200);//Funcion constructora


let texto1 = "hola";
let texto1String = String(texto1);
let texto1String2 = String("aloja");

let bigInt1 = 12n;
let bigInt1Big = BigInt(bigInt1);
let bigInt1Big2 = BigInt(200n);

let ul = undefined;

//Pregunta 2: Imprima todos los valores y todos los tipos de esos valores usando console.log. Intente usar la interpolación de cadenas para mostrar el valor y el tipo simultáneamente con una sola llamada a console.log, por ejemplo, con el siguiente formato: 1000 [número].

console.log(typeof bigInt1, bigInt1); // BigInt 12n
console.log(` ${typeof bigInt1}, ${bigInt1}`); //BigInt 12
//En esta línea, estás usando una template literal (las comillas invertidas ``).Cuando interpolas ${bigInt1}, JavaScript convierte el valor a string.Al hacer esta conversión, la n se pierde, porque al pasar de BigInt a string, JavaScript muestra solo el número
console.log(` ${typeof bigInt1}, ${bigInt1.toString()}n`);
//---------------------------------------------------------------
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;


console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);

//Pregunta 3: Realizar una cadena de conversiones: crear un Booleano de un BigInt creado a partir de un Número que fue creado a partir de una Cadena. Empecemos por el valor"1234". ¿Es posible?
let cadenaTexto = "1234";
console.log(typeof cadenaTexto, cadenaTexto);

let cadenaTextoNumero = Number(cadenaTexto);
console.log(typeof cadenaTextoNumero, cadenaTextoNumero);

let cadenaNumeroBigInt = BigInt(cadenaTextoNumero);
console.log(typeof cadenaNumeroBigInt, cadenaNumeroBigInt);

let cadenaBigIntBooleano = Boolean(cadenaNumeroBigInt);
console.log(typeof cadenaBigIntBooleano, cadenaBigIntBooleano);
//Otra forma
let b5 = Boolean( BigInt(Number("1234")));
console.log(`${b5} [${typeof b5}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b6 = Boolean(bi);
console.log(`${b6} [${typeof b6}]`);






//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
