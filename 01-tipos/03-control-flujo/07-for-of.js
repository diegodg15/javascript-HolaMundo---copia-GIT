/**
 * while
 * do while
 * for
 */
//Estos tres loops nos permite calcular como vamos a realizar una iteración, de manera manual, hay que definir una variable y luego indicar dondición y por último que se va a realizar después de la itración.

let animales = ["Perro", "Gato"];
//definir cómo se llamaría cada uno de estos elementos, luego el nombre del array
for(let animal of animales){
    console.log(animal);//perro, gato
}

//loop while
let i =0;
while(i<animales.length){
    console.log(animales[i]);
    i++;
}