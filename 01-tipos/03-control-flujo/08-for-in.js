//Iterar las propiedades de un objeto

let user = {
    id:1,
    name:"Diego",
    age:24
};

for( let prop in user){
    console.log(prop);//id, name, age
}


for( let prop in user){
    console.log(user[prop]);//id 1, name Diego, age 25
}


let animales = ["Perro", "Gato"];
for(let indice in animales){
    console.log(indice, animales[indice]);
}

//Si vas a acceder a los elemntos de un array no utilizes for in utiliza for of 