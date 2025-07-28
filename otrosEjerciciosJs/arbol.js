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

console.log(hummus(2));

//Ejercicio básico
console.time("Tiempo respuesta");
{
    let saludo = "¿Hola cómo estás?";
    let saludo2 = String("¿Hola cómo estás?");
    console.log(`El mensaje es: ${saludo}`);
    console.log(`El mensaje es: ${typeof saludo}`);
}
console.timeEnd("Tiempo respuesta");

//Ejercicio calcular factorial de un número:
let n = 4;

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Se debe llamar a factorial pasando el valor de n
console.log(factorial(n));  // 24

//Suma entre numeros pares de 2 hasta 100
let numerSuma = 2;
let numero = 4;
while (numero <= 100) {
    numerSuma = numerSuma + numero;
    numero += 2;
}
console.log(`suma pares entre 2 y 100 =`, numerSuma);

//Suma de los números impares del 1 al 10
let sumaNumerosImpares = 0;
for (let n3 = 1; n3 <= 10; n3 += 2) {
    sumaNumerosImpares = sumaNumerosImpares + n3;
}
console.log(sumaNumerosImpares);
//otra forma
let numeroImpar = 1;
let contadorNumeroImpar = 3;
while (contadorNumeroImpar <= 10) {
    numeroImpar = numeroImpar + contadorNumeroImpar
    contadorNumeroImpar += 2;
}
console.log("es" + numeroImpar);
//Otra forma:
//Funcion suma numeros impares:
let n6 = 1;
function sumaNumerosImpares(n6) {
    let n7 = 3;

    while (n6 <= 10) {
        n6 = n6 + n7;
        n7 += 2;
    }

    return n6;
}

console.log(sumaNumerosImpares(n6));



//Ejercicio: 
/**En un gallinero se necesitan 165KG de maíz al día para alimentar a las gallinas y gallos, se tine un gallo para 5 gallinas
 * , se sabe que una gallina come 500g/día, el doble de un gallo.
 * ¿Cuántos animales hay en el gallinero?
 */
let kg = 165;
let conversionKg = kg * 1000;//conversión kg a g.//tabla 3 simples.

const CONSUMO_TOTAL = conversionKg;
const CONSUMO_GALLINA = 500;
const CONSUMO_GALLO = CONSUMO_GALLINA / 2;
//Relación: 1 gallo por cada 5 gallinas
//Sea x = cantidad de gallos
//Entonces gallinas = 5 * x

//Vamos a encontrar x tal que:
//(5x * 500) + (x * 250) = 165000
function calcularAnimales() {
    let x = 1;
    while (true) {
        const gallinas = 5 * x;
        const alimentoGallinas = gallinas * CONSUMO_GALLINA;
        const alimentoGallos = x * CONSUMO_GALLO;
        const totalAlimento = alimentoGallinas + alimentoGallos;

        if (totalAlimento === CONSUMO_TOTAL) {
            const totalAnimales = gallinas + x;
            console.log(`Gallos: ${x}`);
            console.log(`Gallinas: ${gallinas}`);
            console.log(`Total animales: ${totalAnimales}`);
            break;
        }
        x++;
    }
}
calcularAnimales();



