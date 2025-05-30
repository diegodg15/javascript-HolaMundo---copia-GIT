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