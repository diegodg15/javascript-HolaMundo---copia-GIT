
//for(inicialización; comparación/condición; actualizar){}

let i = 2;
while (i < 2) {
    if (i % 2 == 0) {
        console.log(`Número par: ${i}`);
    }
    i++;
}

//Bucle for
for (let i2 = 2; i2 < 10; i2++) {
    if (i2 % 2 == 0) {
        console.log(`Número par: ${i2}`)
    }
};
//--------------------------------------------
// Ejemplos de bucles for

// for clásico
for (let i = 0; i < 5; i++) {
    console.log("for clásico:", i);
}

// for...of (para recorrer arrays)
const array = [10, 20, 30];
for (const valor of array) {
    console.log("for...of:", valor);
}

// for...in (para recorrer propiedades de objetos)
const objeto = { a: 1, b: 2, c: 3 };
for (const clave in objeto) {
    console.log("for...in:", clave, objeto[clave]);
}


