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
//---------------------------------------------------


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

let big3 = 1000n + 20;
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

let big4 = 1000n / 0n;  //  ->  Uncaught  RangeError:  Division  by  zero

let numeroSuma1 = 7n, numeroSuma2 = 4n; //Cuando tiene n es del tipo Bigint 
let resultado = numeroSuma1 / numeroSuma2;
console.log(`El resultado es ${resultado}`); //1
console.log(typeof (resultado))//BigInt
//---------------------------------------------------


//>>>>>>>>>>TIPO DE DATO STRING<<<<<<<<<<
let ciudad = "Malawi";
let continente = 'Africa';
console.log(ciudad);  //  ->  Malawi
console.log(typeof country);  //  ->  string
console.log(continente);  //  ->  Africa
console.log(typeof continente);  //  ->  string

let mensaje1 = "El barco “Marte” hizo escala en el puerto.";
let mensaje2 = 'El ciclón "Cilida" pasará cerca de Mauricio.';
console.log(mensaje1);  //  ->  El barco “Marte” hizo escala en el puerto.
console.log(mensaje2);  //  ->  El ciclón "Cilida" pasará cerca de Mauricio.

let mensajeNuevo1 = 'The  vessel  \'Mars\'  called  at  the  port.';
let mensajeNuevo2 = "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
console.log(mensajeNuevo1);  //  ->  El barco “Marte” hizo escala en el puerto.
console.log(mensajeNuevo2);  //  ->  El ciclón "Cilida" pasará cerca de Mauricio.

let path1 = "C:\\Windows";
console.log(path1);  //  ->  C:\Windows

let path2 = "C:\\Windows" - "Windows";
console.log(path2);  //  ->  NaN

let test = "100" - "10";
console.log(test);  //  ->  90
console.log(typeof test);  //  ->  number

let path3 = "C:\\" + "Windows";
console.log(path3);  //  ->  C:\Windows

let test2 = "100" + "10";
console.log(test2);  //  ->  10010
console.log(typeof test2);  //  ->  string

let country = "Malawi";
let continent = "Africa";

let sentence = `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

console.time();
console.log("test  console");  //  ->  test  console
console.timeEnd();  //  ->  default:  0.108154296875  ms

console.time("timepoRespuesta");
//Aquí va un fragmento de código.
console.timeEnd("tiempoRespuesta");
//---------------------------------------------------
//Metodos string:
let str = "java  script  language";

//Calcular tamño del string
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4

//Devuelve el caracter de la posición 
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'

//Devueve una cadena según el rango especificado
console.log(str.slice(0, 4));  //  ->  'java'
console.log('test'.slice(1, 3));  //  ->  'es'

//Divide la cadena en subcadenas siempre que se encuentre un separador
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']
//---------------------------------------------------
//AutoBoxing:
/*Cuando queremos acceder a métodos de datos primitivos, el interprete de js 
*convierte el dato primitivo a un objeto temporalmente.
*Los tipod des datos tienen metodos que están presentes en el tipo de esa clase,
*por ejemplo let saludo "hola"; -> saludo = clase string, string tiene el método .characterAt();
*/
//Ejemplo:
let texto = "Salu2";
//El interprete lo convierte a objeto
let temporal1 = new String(texto);

let river = "Mekong";
let character = river.charAt(2);
console.log(character);  //  ->  k

//Esto ^ lo convierte en un objeto temporal
let river2 = "Mekong"; //Dato literal
let temporal = new String(river2);
let letra = temporal.charAt(2);
console.log(letra);
//---------------------------------------------------


//>>>>>>>>>>TIPO DE DATO UNDEFINED<<<<<<<<<<
let declaredVar;
console.log(typeof declaredVar);  //  ->  undefined

declaredVar = 5;
console.log(typeof declaredVar);  //  ->  number

declaredVar = undefined;
console.log(typeof declaredVar);  //  ->  undefined

//El valor indefinido también puede ser devuelto por el operador typeof cuando se utiliza una variable inexistente como argumento.
Console.log(typeof notDeclaredVar);  //  ->  undefined
console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined
//---------------------------------------------------


//>>>>>>>>>>TIPO DE DATO SYMBOL<<<<<<<<<<
const simbolo1 = Symbol("id");
const simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2); // false 
//Cada Symbol() es único, inmutable

//No se auto-convierte
const sym = Symbol();
console.log("Símbolo: " + sym); //TypeError

//Creación:
// Sin descripción
const simboloNuevo1 = Symbol();

// Con descripción (útil para depuración)
const simboloNuevo2 = Symbol("descripción");

//Casos de uso:
//Claves únicas en objetos:
const ID = Symbol("id");
const usuario = {
    nombre: "Ana",
    [ID]: "abc123" // Clave no enumerable
};
console.log(usuario[ID]); // "abc123"
console.log(Object.keys(usuario)); // ["nombre"] → ¡No aparece el Symbol!

//Evitar colisiones:
// Biblioteca externa
Array.prototype.iterar = function() {  };

// Tu código: ¡Sin riesgo de sobrescribir!
Array.prototype[Symbol.iterator] = function*() { 
  // Implementación personalizada
};

//NO son Instanciables:
new Symbol(); //TypeError: Symbol no es constructor
//---------------------------------------------------


//>>>>>>>>>>TIPO DE DATO NULL<<<<<<<<<<
let nulo = null;//null

someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object

let noDefinido;
let undef = undefined;//Undefined : valor o tipo.

/**
 *
 *
 */



//---------------------------------------------------






//---------------------------------------------------

//----------------------------------------------------

