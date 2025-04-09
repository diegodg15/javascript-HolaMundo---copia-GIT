let resultado = 1;
let contador;

for(contador = 0; contador < 10; resultado *=2 ){
    contador++;
}
console.log(resultado);

//Bucle While 1 hasta el 5
let incremento = 0;

while(incremento < 5){
 incremento++;
 console.log(incremento);
}


//Árbol de navidad mitad.
/*
El operador de asignación, "+=" actua de lasiguiente manera:
arbol+="#" --> arbol = arbol + "#"
*/
for(let arbol = "#"; arbol.length < 8; arbol +="#"){
    console.log(arbol);
}
