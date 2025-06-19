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

let funcionString = String("Saludos");
console.log(funcionString);//Saludos

const big1 = BigInt(42);
console.log(big1);  //  ->  42n

const big2 = BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
//Estas funciones las usamos en conversiones de tipos.
//---------------------------------------------------
//Ejemplo de conversión:

const num2 = 42;

const strFromNum1 = String(num2);
console.log(typeof strFromNum1, strFromNum1)//String 42

const strFromNum2 = String(8);
console.log(typeof strFromNum2, strFromNum2)//String 8

const strFromBool = String(true);
console.log(typeof strFromBool, strFromBool)//String True

const numFromStr = Number("312");
console.log(typeof numFromStr, numFromStr)//NUmber 312

const boolFromNumber = Boolean(0);
console.log(typeof boolFromNumber, boolFromNumber)//Boolean false



//>>>>>>>>>>CONVERSIONES DE TIPOS DE DATOS<<<<<<<<<<
//COnversión de String:
let str2 = "text";
let strStr = String(str2);
console.log(`${typeof str2}  :  ${str2}`);  //  ->  string  :  text
console.log(`${typeof strStr2}  :  ${strStr2}`);  //  ->  string  :  text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof strNr}  :  ${strNr}`);  //  ->  string  :  42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof strBl}  :  ${strBl}`);  //  ->  string  :  true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof strBnr}  :  ${strBnr}`);  //  ->  string  :  123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof strUn}  :  ${strUn}`);  //  ->  string  :  undefined

let n = null;
let strN = String(n);
console.log(`${typeof n}  :  ${n}`);  //  ->  object  :  null
console.log(`${typeof strN}  :  ${strN}`);  //  ->  string  :  null
//---------------------------------------------------

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
//---------------------------------------------------
//Conversión a número:
console.log(Number(42));  //  ->  42

console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN

console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000

console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0

console.log(Number(undefined));  //    ->  NaN

console.log(Number(null));//  ->  0

