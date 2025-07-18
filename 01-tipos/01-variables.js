/** CONVENSIÓN DE VARIABLES JS*/

let nombre = "Hola Mundo";

//camelCase: variables y funciones.
let nombreCompleto;//camelCase

//snake_case: nombre de archivos.
let nombre_completo;//snake_case

//UPPER_SNAKE_CASE: valores constantes o globales.
const VALOR_DE_PI = 3.14;

//PascalCase/UpperCamelCase: clases y constructores.
class TrianguloRectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}
//--------------------------------------------

//Decalración de varias variabes en una línea
let valoresVarios = 1, valoresVarios2 = 2, valoresVarios3 = 3;

//>>>>>>>>>TIPOS DE VARIABLES<<<<<<<<<<

//Variable VAR: scope function
var nombre1;

//Varible LET: scope block
let nombre2;

//Variable CONST: scope block 
const nombre3 = 2;

/*
let num = 2, num2= 3, num3= 4
console.log(num, num2, num3)//2 3 4
*/

//Tipos de impresión console.log
let variableDeImpresion = "IMPRESIÓN";
console.log(variableDeImpresion);
console.log(`La variable es ${variableDeImpresion}`);//Interpolación
console.log("La variable es : " + variableDeImpresion);//Concatenación
console.log("La variable es : ", variableDeImpresion);
console.log("La variable es : ", variableDeImpresion, "más texto");
//Tipos de impresión console.log con saltos de líneas
console.log("Hola\nMundo");
// Salida:
// Hola
// Mundo

console.log(`Línea 1
Línea 2
Línea 3`);
// Salida:
// Línea 1
// Línea 2
// Línea 3

const mensaje = "Primera línea" + "\n" + "Segunda línea";
console.log(mensaje);
// Salida:
// Primera línea
// Segunda línea

console.log("Hola\tmundo")
// Salida:
// Hola	mundo

//Ejemplo impresión console.log();
let str2 = "text";
let strStr = String(str2);
console.log(`${typeof str2} : ${str2}`);
console.log(typeof str2, str2);
console.log(typeof str2 + " " + str2);

//Si es un objeto:
console.log(nombreObjeto["atributo"]);
console.log(nombreObjeto.atributo);
console.log(`El objeto es : ${nombreObjeto["atributo"]}`);


//>>>>>>>>>>SOMBREADO DE VARIABLES/SHADOWING<<<<<<<<<<
/**Sombreado de variable: declarar una variable global y local con el mismo nombre. */
let contador = 100;
console.log(contador); //->100
{
    contador = 200;//Reasignacionde variable
    console.log(contador);//->200
}

console.log(contador);//->200

//---------------------------------------------------------

let contador2 = 100;
console.log(contador);//->100
{
    let contador2 = 200;
    console.log(contador);//->200
}
console.log(contador);//->100

//El console.log al final imprime 100 por que esta declarada nivel global.