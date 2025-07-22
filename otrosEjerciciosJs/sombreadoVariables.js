//SOMBREADO DE VARIABLES O SHADOWING
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

const halve = function(n) {
return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
//¿Por qué n2 dentro de la función no toma el n2 = 10 externo?: Porque estás declarando un parámetro n2 dentro de la función, y eso crea una nueva variable local que somete (shadow) a la del ámbito externo. Es decir, el n2 dentro de halve(n2) no tiene nada que ver con el n2 = 10 que está afuera.c
