function suma(a, b){
    console.log(arguments);//Esto no se hace, pero esta variable accede a todos los valores de la funcion
    return b + 2;
}
let resultado = suma(5, 6, 1, 2, 3);

console.log(resultado);

