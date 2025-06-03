//Personaje de 
let nombre = "Rayo Mcqueen";
let nombrePelicula = "Cars";
let edad = 16;

let personaje = {//Objeto literal
    nombre : "Rayo Mcqueen",
    nombrePelicula : "Cars",
    edad : 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje ["nombrePelicula"]);
console.log(`La edad es ${personaje["edad"]}`)

//Cambiar porpiedad a objeto

personaje.edad = 10;
personaje["edad"] = 16;

let llave = "edad";
personaje["edad"] = 19;

delete personaje.edad;
console.log(personaje);
