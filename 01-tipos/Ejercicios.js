
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


//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
//Ejercicio N°1:
