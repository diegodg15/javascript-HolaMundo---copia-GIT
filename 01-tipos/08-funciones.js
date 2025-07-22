/**FUNCIONES */

function saludar() {
    console.log("Hola");
}

saludar();
//-------------------------
function suma() {
    return 2+2;
}

let resultado = suma();
console.log(suma());

//--------------------------------
let suma2=function(n1,n2){
    return n1+ n2;
}
console.log(suma2(2,3));

//---------------------------------
//Impresión console.log
let n3 = 5;
function a() {
    let n3 = 10;
    return console.log(n3);
}
a();             // Imprime 10
console.log(n3);  // Imprime 5
console.log(a()); // Imprime 10 y luego undefined-->console.log() = undefined
// Porque console.log(n) no retorna ningún valor útil—su retorno es undefined. Entonces, la función a() retorna el resultado de console.log(n), que es undefined. 

/**Esto está haciendo:
 * let resultado = console.log(10); // Esto imprime 10 y guarda "undefined"
console.log(resultado);          // Imprime undefined
 */
//Solucion:
function a() {
    let n = 10;
    return n;
}
console.log(a());  // Aquí sí se imprime el valor retornado: 10


//TODO LO QUE ESTÁ DESPUÉS DE RETURN, NO LO EJECUTA LA FUNCION
function a() {
    let n7 = 10;
    return n7;           // Aquí termina la función. Nada después se ejecuta.
    console.log(n7);     // Esto NUNCA se ejecuta.
}

function a() {
    let n71 = 10;
    console.log(n71);     // Esto se ejecuta
    return n71;           // Aquí termina la función. Nada después se ejecuta.
}
