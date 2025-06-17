/**TIPOS DE DATOS:*/

//>>>>>>>>>>TIPO DE DATO BOOLEAN<<<<<<<<<<
//Los Valores Booleanos, utilizan el prefijo "IS". Boolean se utiliza como indicador o "Flag" (bandera).

let verdadero = true;//Boolean
let falso = false;//Boolean

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false);  //  ->  false
console.log(typeof false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof isDataValid);  //  ->  boolean
//-------------------------------------------



//>>>>>>>>>>TIPO DE DATO NUMBER<<<<<<<<<<
let numero = 1;
/*JS utiliza el sistema de doble precisión IEEE-754.--> -23^53+1 a 2^53-1. Fuera de este rango,
se debe utilizar BIGINT.
*/

const YEAR = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(YEAR);  //  ->  1991;
console.log(typeof YEAR);  //  ->  number;

//Tipos de sistemas numéricos:
let a1 = 10;  //  decimal  -  default  
let b1 = 0x10;  //  hexadecimal  
let c1 = 0o10;  //  octal  
let d1 = 0b10;  //  binary  

console.log(a1);  //  ->  10  
console.log(b1);  //  ->  16  
console.log(c1);  //  ->  8  
console.log(d1);  //  ->  2  

let x1 = 9e3;
let y1 = 123e-5; // e= exponencial
console.log(x1);  //  ->  9000
console.log(y1);  //  ->  0.00123

//Valores especiales: 
//+infinity, -infinity
let a2 = 1 / 0;
let b2 = -Infinity;

console.log(a2);  //  ->  Infinity
console.log(b2);  //  ->  -Infinity
console.log(typeof a2);  //  ->  number
console.log(typeof b2);  //  ->  number

//NaN
let s = "Lo que está definido no es un número";
let n = s * 10;
console.log(n);  //  ->  NaN
console.log(typeof n);  //  ->  number
//---------------------------------------------------



//>>>>>>>>>>TIPO DE DATO BIGINT<<<<<<<<<<
let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);  //  ->  1234567890000000000000n
console.log(typeof big);  //  ->  bigint

console.log(big2);  //  ->  1n
console.log(7n / 4n);  //  ->  1n en esta división, devuelve el número entero, no los decimales.

let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero

let numeroSuma1 = 7n, numeroSuma2 = 4n; //Cuando tiene n es del tipo Bigint 
let resultado = numeroSuma1 / numeroSuma2;
console.log(`El resultado es ${resultado}`); //1
console.log(typeof(resultado))//BigInt
//----------------------------------------------------------------


//>>>>>>>>>>TIPO DE DATO STRING<<<<<<<<<<
let ciudad = "Malawi";
let continente = 'Africa';
console.log(ciudad);  //  ->  Malawi
console.log(typeof country);  //  ->  string
console.log(continente);  //  ->  Africa
console.log(typeof continente);  //  ->  string

let mensaje01 = "El barco “Marte” hizo escala en el puerto.";
let message02 = 'El ciclón "Cilida" pasará cerca de Mauricio.';
console.log(mensaje1);  //  ->  El barco “Marte” hizo escala en el puerto.
console.log(mensaje2);  //  ->  El ciclón "Cilida" pasará cerca de Mauricio.

let mensajeNuevo1 = 'The  vessel  \'Mars\'  called  at  the  port.';
let mensajeNuevo2 = "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
console.log(mensajeNuevo1);  //  ->  El barco “Marte” hizo escala en el puerto.
console.log(mensajeNuevo2);  //  ->  El ciclón "Cilida" pasará cerca de Mauricio.

let path1 = "C:\\Windows";
console.log(path1);  //  ->  C:\Windows

//Metodos string:
let str = "java  script  language";

console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4

console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'

console.log(str.slice(0, 4));  //  ->  'java'
console.log('test'.slice(1, 3));  //  ->  'es'

console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

//AutoBoxing:
let river = "Mekong";
let character = river.charAt(2);
console.log(character);  //  ->  k

/*Cuando queremos acceder a métodos de datos primitivos, el interprete de js 
*convierte el dato primitivo a un objeto temporalmente.
*Los tipod des datos tienen metodos que están presentes en el tipo de esa clase,
*por ejemplo let saludo "hola"; -> saludo = clase string, string tiene el método .characterAt();
*/
let river2 = "Mekong"; //Dato literal
let temporal = new String(river2);
let letra = temporal.charAt(2);
console.log(letra);
//--------------------------------------------------------



//>>>>>>>>>>TIPO DE DATO UNDEFINED<<<<<<<<<<



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







let noDefinido;
let undef = undefined;//Undefined : valor o tipo.
let nulo = null;//null
/**
 * 
 * 
 */



//---------------------------------------------------

//>>>>>>>>>>TIPO DE DATO BigInt<<<<<<<<<<





//---------------------------------------------------

//----------------------------------------------------

