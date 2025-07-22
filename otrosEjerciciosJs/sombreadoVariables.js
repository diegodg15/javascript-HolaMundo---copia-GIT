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


