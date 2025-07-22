//Short-circuit

//False:
/**
 * false
 * 0
 * ""
 * null
 * NaN
 * undefined
 */

let nombre = "";
let username = nombre || "Anonimo"; 
console.log(username);//Devuelve anónimo

console.log(nombre != ""? "Es distinto": "No es distinto");

function fn1(){
    console.log("soy funcion 1");
    return true;
}

function fn2(){
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2();