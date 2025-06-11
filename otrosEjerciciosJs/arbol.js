let hojaArbol = "#";

for (hojaArbol; hojaArbol.length <= 10; hojaArbol += "#") //+= es lo mismo que hojaArbol= hojaArbol +"#".
    console.log(hojaArbol);


//FIZZ BUZZ
for (let n = 1; n <= 100; n++) {
    let palabra = "";
    if (n % 2 == 0) {
        palabra += "FIZZ";
    }
    if (n % 3 == 0) {
        palabra += "BUZZ";
    }

    console.log(palabra.length > 0 ? palabra : n);

}

//INTEPOLACIÓN
const nombre = "Diego";
const edad = 24;
{
    let mensaje = `Mi nombre es ${nombre} y mi tengo ${edad} años`;
    console.log(mensaje);
}


//Tablero de ajedrez
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);

//Ejercicio receta con funcion anidada 

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;



        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "lata", "garbanzos");
    ingredient(0.25, "taza", "tahini");
    ingredient(0.25, "taza", "jugo de limón");
    ingredient(1, "diente", "ajo");
    ingredient(2, "cucharada", "aceite de oliva");
    ingredient(0.5, "cucharadita", "comino");
};

console.log(hummus(2))