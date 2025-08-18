/**CONVERSIÓN TIPOS */

//Funciones constructoras / Funciones de construcción primitivas:
/*
Usar literales no es la única forma de crear variables de los tipos primitivos dados. 
La segunda opción es crearlas mediante funciones constructoras . 
Las siguientes funciones devolverán primitivas de un tipo dado: Boolean, Number, BigInt, y String.
*/
/**
 * La función BigInt. A diferencia de otras funciones constructoras, requiere que se le pase un valor inicial. Este puede ser un número entero que se convertirá a BigInt (ver ejemplos).
*/
const str = String();
const num = Number();
const bool = Boolean();

console.log(str);  //  ->
console.log(bool);  //  ->  false
console.log(num);  //  ->  0

let funcionString = String("Saludos");
console.log(funcionString);//Saludos

const big1 = BigInt(42);
console.log(big1);  //  ->  42n

const big2 = BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
//Estas funciones las usamos en conversiones de tipos.

const NUMERO_BIG = BigInt(80);
console.log(NUMERO_BIG);//80n
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
console.log(typeof numFromStr, numFromStr)//Number 312

//ParseINt
const numFromStr5 = String("312");
console.log(typeof numFromStr5, numFromStr5)//String 312
const NUMERO_PARSEINT = parseInt(numFromStr5)
console.log(typeof NUMERO_PARSEINT, numFromStr5)//Number 312

const boolFromNumber = Boolean(0);
console.log(typeof boolFromNumber, boolFromNumber)//Boolean false



//>>>>>>>>>>CONVERSIONES DE TIPOS DE DATOS<<<<<<<<<<
//Conversión de STRING:
//cuando se convierte un valor a string, cualquier tipo se puede convertir, y el resultado será una cadena de texto que representa ese valor. Esto se llama coerción de tipos o type casting.
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

//Otros tipos de conversiones a string:
let numero = 12;
let numeroConvertido = numero + "";
console.log(typeof numeroConvertido, numeroConvertido);

let numero02 = 12;
let numeroConvertido2 = `${numero02}`;//conversión moderna es6+
console.log(typeof numeroConvertido2, numeroConvertido2);

let numero3 = 14;
let numeroConvertido3 = numero3.toString();//puede fallar si es undefined o null
console.log(typeof numeroConvertido2, numeroConvertido3);


//---------------------------------------------------
//Conversión (casting) String a numero:
let numeroUno = Number("2");
let numeroDos = parseInt("2");
let suma = "2" + "2";
let suma2 = numeroUno + numeroDos;
console.log(suma)
console.log(suma2)

let numeroDosParse = parseInt("24n4"); // Parse Int convierte el primer número o cadena de números, ignorando lo demás.


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
//Conversión a NUMBER:
console.log(Number(42));  //  ->  42
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3 //El 11 esta en base 2 osea 11= binario; convierte de binario->decimal 11 -> 3
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

let textoNumero = "123ABC";
let textoConvertido = parseInt(textoNumero);
console.log(`${textoConvertido}`);//Number 123 parseInt convierte una cadena de texto en numero solo los digitos, hasta el último.

//De BigInt a Number se pierde precisión
const big = 12345678901234567890n;
const num3 = Number(big);
console.log(num3);  // 12345678901234567000  <- Precisión perdida

//De cualquier tipo de dato a Number que de Nan
const str4 = "abc";
const num4 = Number(str4);
console.log(num4); // NaN

//Otras formas de convertir a number
let number = "42.3abc";      // NaN (la cadena no es válida en su totalidad)
let numberConvertionInt = parseInt(number);    // 42
let numberConvertionFloat = parseFloat(number);  // 42.3

//De boolean a number
let isNumberBoolean = true;
let numericoBoolean = Number(isNumberBoolean)
console.log(numericoBoolean);// 1

//Conversión con + y - a number
let texto = "45";
let convertido = +texto;
console.log(convertido);       // 45
console.log(typeof convertido); // "number"

let str6 = "42";
let num6 = -str6;
console.log(num6);         // -42
console.log(typeof num6);  // "number"

//Tipos de conversiones a numero
let numeroDecimales = "123.5";
let numeroDecimalesParseInt = parseInt(numeroDecimales);
console.log(typeof numeroDecimalesParseInt, numeroDecimalesParseInt);//number 123

let numeroDecimalesParseFloat = parseFloat(numeroDecimales);
console.log(typeof numeroDecimalesParseFloat, numeroDecimalesParseFloat);//number 123.5

parseInt("08");        // 0 (¡interpreta como octal!)
parseInt("08", 10);    // 8 (correcto con base decimal)

//siempre especificar la base parsInt(cadena/String, base/Radix);
let numero2 = "FF";
let numero2Convert = parseInt(numero2, 16);
console.log(numero2Convert);//255

//De binario a decimal:
let numeroBinario = 1010;
let numeroDecimal = parseInt(numeroBinario, 2);
console.log(numeroDecimal);//10

let numeroBinario2 = 1011;
let numeroDecimal2 = parseInt(numeroBinario2, 2);
console.log(numeroDecimal2);//11

//De decimal a binario:
let numerodecimalDos = 2;
let numeroBinarioDos = numerodecimalDos.toString(2)
console.log(numeroBinarioDos);//10

let numerodecimalDos2 = 1011;
let numeroBinarioDos2 = numerodecimalDos2.toString(2)
console.log(numeroBinarioDos2);//11

//Conversión implícita:
const precio = "99.99";
const total = +precio * 1.16; // Conversión implícita

//Conversión rápida:
let texto3 = "45";
let convertido1 = +texto3; //Si es - el número se convierte a negativo.
console.log(convertido1);       // 45
console.log(typeof convertido1); // "number"

let texto2 = "45";
let convertido2 = +texto2;
console.log(convertido2);// -45
console.log(typeof convertido2); // "number"

const a = "123";
console.log(+a);        // 123
console.log(Number(a)); // 123

//---------------------------------------------------


//Conversión a BOOLEAN
console.log(Boolean(true));  //  ->  true
//aquí el valor true es boolean
console.log(Boolean(42));  //  ->  true
//aqui el valor 42 el truthy y se convierte a un booleano osea true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false

console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false

console.log(Boolean(undefined));  //  ->  false

console.log(Boolean(null));  //  ->  false

let numeroNoBooleano = 23;
let conversionNumeroBooleano = Boolean(numeroNoBooleano);
console.log(typeof conversionNumeroBooleano, conversionNumeroBooleano);//boolean true
console.log(Boolean(numeroNoBooleano));//True

/*Truthy y Falsy = cualquier valor en un contexto booleano
* por ejemplo 0 no es un Boolean, sino un contexto del valor en Boolean, sría un Falsy. 
* Boolean solo es TRUE o FALSE.*/
if (0) {
    console.log("Es traducido a true");
} else {
    console.log("Es traducido a false");
}
//---------------------------------------------------

//Conversión a BIGINT
console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n

console.log(BigInt(true));  //  ->  1n

console.log(BigInt("11"));  //  ->  11n
console.log(BigInt("0x11"));  //  ->  17n

console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt

console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt.

console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  
// The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer.
//---------------------------------------------------

//Conversiones IMPLÍCITAS
const str1 = 42 + "1";
console.log(str1);                //  ->  421
console.log(typeof str1);  //  ->  string

const str5 = 42 - "1";
console.log(str5);                //  ->  41
console.log(typeof str5);  //  ->  number

//Síntesis:
{
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
}

