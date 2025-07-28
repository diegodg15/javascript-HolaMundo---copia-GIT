/**Construir una función que recibe dos parametros */

function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}
let mayor = cualEsMayor(10, 5);
console.log(mayor);

//Otra forma:
function cualEsMayor2(a, b) {
    return a > b ? a : b;

}
let mayor2 = cualEsMayor2(10, 5);
console.log(mayor2);