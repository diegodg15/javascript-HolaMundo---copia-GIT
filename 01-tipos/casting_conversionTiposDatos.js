/**CONVERSIÓN TIPOS */

//Funciones constructoras / Funciones de construcción primitivas:
/*
Usar literales no es la única forma de crear variables de los tipos primitivos dados. 
La segunda opción es crearlas mediante funciones constructoras . 
Las siguientes funciones devolverán primitivas de un tipo dado: Boolean, Number, BigInt, y String.
*/
const str = String();
const num = Number();
const bool = Boolean();

console.log(str);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false

const big1 = BigInt(42);
console.log(big1);  //  ->  42n

const big2 = BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
//Estas funciones las usamos en conversiones de tipos.


//>>>>>>>>>>CONVERSIONES DE TIPOS DE DATOS<<<<<<<<<<

//Conversión (casting) String a numero:
let numeroUno = Number("2");
let numeroDos = parseInt("2");
let suma = "2" + "2";
let suma2 = numeroUno + numeroDos;
console.log(suma)
console.log(suma2)

let numeroDosParse = parseInt("24n4"); // Parse Int convierte el primer numero o cadena de numeros, ignorando lo demás.


let path = "C:\\Windows" - "Windows";
console.log(path);  //  ->  NaN

let test = "100" - "10";
console.log(test);  //  ->  90
console.log(typeof test);  //  ->  number


let path2 = "C:\\" + "Windows";
console.log(path);  //  ->  C:\Windows

let test2 = "100" + "10";
console.log(test);  //  ->  10010
console.log(typeof test2);  //  ->  string

//La conversion aplica a todas las operaciones aritméticas, con
//excepción de la suma "+".
