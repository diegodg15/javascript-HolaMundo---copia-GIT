function suma(a, b){
    console.log(arguments);//Esto no se hace, pero esta variable accede a todos los valores de la funcion
    return b + 2;
}
let resultado = suma(5, 6, 1, 2, 3);

console.log(resultado);

function multiplicacion(a,b){
    return a * b;
}

let resultadoMultiplicacion= multiplicacion(2,3);
console.log(resultadoMultiplicacion);


function multiplicacion2(a,b){
    return a * b;
}

let resultadoMultiplicacion2= multiplicacion2(2,3);
console.log(resultadoMultiplicacion2);

resultadoMultiplicacion2= multiplicacion2(4,5)
console.log(resultadoMultiplicacion2);