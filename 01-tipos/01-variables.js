/** CONVENSIÓN DE VARIABLES JS*/

let nombre = "Hola Mundo";

//camelCase: variables y funciones.
let nombreCompleto;//camelCase

//snake_case: nombre de archivos.
let nombre_completo;//snake_case

//UPPER_SNAKE_CASE: valores constantes o globales.
const VALOR_DE_PI = 3.14;

//PascalCase/UpperCamelCase: clases y constructores.
class TrianguloRectangulo{
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}
//--------------------------------------------



//>>>>>>>>>TIPOS DE VARIABLES<<<<<<<<<<

//Variable VAR: scope function
var nombre1;

//Varible LET: scope block
let nombre2;

//Variable CONST: scope block 
const nombre3 =2; 

/*
let num = 2, num2= 3, num3= 4
console.log(num, num2, num3)//2 3 4
*/