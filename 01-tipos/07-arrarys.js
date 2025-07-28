let autos = ["Ford", "Dodge"];//Array literal 

console.log(autos);
console.log(autos[0]);

autos[2] = "Chevrolet";
console.log(autos);

console.log(autos[2]);
console.log(autos.length);//Devuelve la cantidad de atributos en el array


let autos2 = ["ford", "chevrolet"];
console.log(autos2[0]);
console.log(autos2.length);
autos2[1] = "toyota"
console.log(autos2);

console.log(typeof autos2);
//---------------------------------

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri

days[0] = "Sunday";
console.log(days[0]);  //  ->  Sunday Reemplazo de valor

let emptyArray = [];
console.log(emptyArray[0]);  //  ->  undefined
//---------------------------------

let animals = [];
console.log(animals[0]);  //  ->  undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat
//---------------------------------
//Creación de arrays con tipos de datos diferentes
let values = ["Test", 7, 12.3, false];

//Arrays anidados:
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James

let femaleNames = names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia
//---------------------------------

//Ventaja de usar array:
/**
 * Una de las desventajas de la solución presentada (Objetos) fue la necesidad de declarar variables para todos los usuarios, por lo que al escribir el programa debíamos conocer el número de usuarios. Usando un array, podemos agregar nuevos usuarios mientras el programa se ejecuta. Mencionamos varias veces que los elementos del array pueden ser cualquier dato, incluyendo objetos.
 */
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

//Con array:
/**Coloquemos información sobre estos dos usuarios en la matriz de usuarios e intentemos mostrar alguna información como parte de la prueba:
 */
let users = [
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21

//Agregación:
users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"

}

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(typeof days);  //  ->  object

/**
 * En términos generales, en JavaScript, todo, excepto las primitivas, es un objeto. Los arrays también se consideran un tipo especial de objeto.Typeof El operador no distingue entre tipos de objeto (o más precisamente, clases), por lo que nos informa que la variable días contiene un objeto. Si queremos asegurarnos de que la variable contenga un array, podemos hacerlo usando el operadorinstancia instanceof, entre otros.
 */

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days);  //  ->  object
console.log(typeof day);  //  ->  string

console.log(days instanceof Array);  //  ->  true
console.log(day instanceof Array);  //  ->  false

/**
 * Elinstancia deEl operador es un operador de dos argumentos que requiere que se especifiquen la variable (o literal) y la clase del objeto que se está probando. En nuestro caso, la clase  Array. El operador regres a TRUE o FALSE, dependiendo del resultado de la prueba.
 */

//Longitud .length
let names2 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names2.length);  //  ->  4 (0,1,2,3 = 4 total)

names2[5] = "Amelia";
console.log(names2.length);  //  ->  6 por que le estamos asignando la posicion 5 y la posicion 4 no tiene nada, lo que se suma igual.

console.log(names2);  //  ->  ["Olivia",  "Emma",  "Mateo",  
"Samuel", undefined, "Amelia";
console.log(names2[3]);  //  ->  Samuel
console.log(names2[4]);  //  ->  undefined
console.log(names2[5]);  //  ->  Amelia

//Índice de .indexOf
let nombreLista = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(nombreLista.indexOf("Mateo"));  //  ->  2
console.log(nombreLista.indexOf("Victor"));  //  ->  -1

//Empujar .push
let nombresEmpujar = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(nombresEmpujar.length);  //  ->  4

nombresEmpujar.push("Amelia");
console.log(nombresEmpujar.length);  //  ->  5
console.log(nombresEmpujar);  //  -  >  ["Olivia",  "Emma",  "Mateo", "Samuel", "Amelia"
