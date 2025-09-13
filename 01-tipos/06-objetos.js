//Personaje de 
let nombre = "Rayo Mcqueen";
let nombrePelicula = "Cars";
let edad = 16;

let personaje = {//Objeto literal
    nombre: "Rayo Mcqueen",
    nombrePelicula: "Cars",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["nombrePelicula"]);
console.log(`La edad es ${personaje["edad"]}`);
console.log(`lA EDAD ES : ${personaje.edad}`);
//Cambiar porpiedad a objeto

personaje.edad = 10;
personaje["edad"] = 16;

let llave = "edad";
personaje["edad"] = 19;

delete personaje.edad;
console.log(personaje);

//--------------------------------
/**En JavaScript, existen varias maneras de crear objetos, pero la más sencilla y rápida es usar el literal de llave. */
let testObj1 = {};
console.log(typeof testObj);  //  ->  object

let testObj = {
    nr: 600,
    str: "text"
};
console.log(testObj.nr);  //  ->  600
console.log(testObj.str);  //  ->  text
console.log(testObj["nr"]); // 600

/**
 * ¿Para qué necesitamos objetos? La razón más simple para usarlos puede ser el deseo de almacenar varios valores en un mismo lugar, vinculados entre sí por alguna razón.
 */

let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";
//--------------------------------
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus

console.log(user1.age);  //  ->  66
user1.age = 67;//cambiar valor
console.log(user1.age);  //  ->  67

console.log(user2.phone);  //  ->  undefined
user2.phone = "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

console.log(user2.phone);  //  ->  904-399-7557
delete user2.phone; //elimina campo
console.log(user2.phone);  //  ->  undefined




