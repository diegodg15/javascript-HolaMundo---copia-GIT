let numero = 1;//Number
/*JS utiliza el sistema de doble precisión IEEE-754.--> -23^53+1 a 2^53-1. Fuera de este rango,
se debe utilizar BIGINT.
*/

//Conversión String a numero:
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

//-----------------------------------------------

const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year);  //  ->  1991;
console.log(typeof year);  //  ->  number;

let a1 = 10;  //  decimal  -  default  
let b1 = 0x10;  //  hexadecimal  
let c1 = 0o10;  //  octal  
let d1 = 0b10;  //  binary  

console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  

let x1 = 9e3;
let y1 = 123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123


let a2 = 1 / 0;
let b2 = -Infinity;

console.log(a2);  //  ->  Infinity
console.log(b2);  //  ->  -Infinity
console.log(typeof a2);  //  ->  number
console.log(typeof b2);  //  ->  number

let s = "it's  definitely  not  a  number";
let n = s * 10;
console.log(n);  //  ->  NaN
console.log(typeof n);  //  ->  number


let a3 = 10; // decimal - default
let b3 = 0x10; // hexadecimal
let c3 = 0o10; // octal
let d3 = 0b10; // binary

console.log(a3); // -> 10
console.log(b3); // -> 16
console.log(c3); // -> 8
console.log(d3); // -> 2

let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123
console.log(d)


let a4 = 1 / 0;
let b4 = -Infinity;

console.log(a4);  //  ->  Infinity
console.log(b4);  //  ->  -Infinity
console.log(typeof a4);  //  ->  number
console.log(typeof b4);  //  ->  number

let s2 = "it's  definitely  not  a  number";
let n2 = s2 * 10;
console.log(n2);  //  ->  NaN
console.log(typeof n2);  //  ->  number


//---------------------------------------------------


let texto = "hola";//String

let verdadero = true;//Boolean
let falso = false;//Boolean
//Valores Booleanos, utilizan el prefijo "IS".
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

let noDefinido;
let undef = undefined;//Undefined : valor o tipo.
let nulo = null;//null
/**
 * 
 * 
 */

//AutoBoxing:
let  river  =  "Mekong";
let  character  =  river.charAt(2);
console.log(character);  //  ->  k

/*Cuando queremos acceder a métodos de datos primitivos, el interprete de js 
*convierte el dato primitivo a un objeto temporalmente.
*Los tipod des datos tienen metodos que están presentes en el tipo de esa clase,
*por ejemplo let saludo "hola"; -> saludo = clase string, string tiene el método .characterAt();
*/
let river2 = "Mekong"; //Dato lieteral
let temporal = new String(river2);
let letra = temporal.charAt(2);
console.log(letra);



//BigInt

let numeroSuma1 = 7n, numeroSuma2 = 4n; //Cuando tiene n es del tipo Bigint 
let resultado = numeroSuma1 / numeroSuma2;
console.log(`El resultado es ${resultado}`); //1

//---------------------------------------------------
//Bigint

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);  //  ->  1234567890000000000000n
console.log(typeof big);  //  ->  bigint

console.log(big2);  //  ->  1n
console.log(7n / 4n);  //  ->  1n en esta división, devuelve el número entero, no los decimales.

