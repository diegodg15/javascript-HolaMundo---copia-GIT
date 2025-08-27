//Ejercicios generales en orden.

//Ejercicios sobre variables:
/* Declara tres variables: una con var, otra con let y otra con const, e imprime sus valores en consola.
 */
"use strict"; // Aparece solo en la ejecución del programa ya que, js es interpretado. 
{
    let a = 1;
    const b = 2;
    var c = 3;
    console.log(a, b, c);
}

/* Usa let para declarar una variable x, asígnale 10, luego cambia su valor a 20 e imprímelo. */
{
    let x = 10;
    x = 20;
    console.log(x);
}

/* Intercambia los valores de m y n sin usar una tercera variable (variable auxiliar).
 */
{
    let m = 1;
    let n = 2;

    [m, n] = [n, m];// destructuring assignment (asignación por desestructuración)
    console.log(m);
    console.log(n);
}
{
    //Con variable auxiliar:
    let a = 1;
    let b = 2;
    let aux;

    aux = a;
    a = b;
    b = aux;

    console.log(a, b)
}
{
    //Declara num1 y num2, suma sus valores y muestra el resultado.
    let num1 = 1;
    let num2 = 2;
    const resultado = num1 + num2;
    console.log(`El resultado es: ${resultado}`);
}
{
    //Calcula el promedio de nota1, nota2 y nota3.
    let nota1 = 7;
    let nota2 = 6.5;
    let nota3 = 4.6;

    {
        const calcularPromedio = (nota1 + nota2 + nota3) / 3;
        const promedioRedondeado = Math.round(calcularPromedio * 10) / 10;
        console.log(promedioRedondeado);// muestra solo enteros ya que, js los números no guardan ceros a la derecha; si quieres ver 1 decimal, tienes que formatear la salida. 6
        console.log(promedioRedondeado.toFixed(1));//6.0
    }

}
{
    //Convierte una distancia en metros a kilómetros.
    const METROS_POR_KILOMETROS = 1000;
    let distanciaKilometros = 200;

    const conversionDistancia = distanciaKilometros / METROS_POR_KILOMETROS;
    console.log(`La distancia en kilometros es: ${conversionDistancia}`);

}
{
    //Calcula el área de un triángulo usando base y altura.
    let base = 10;
    let altura = 4;
    const FORMULA_AREA = base * altura;

    console.log(FORMULA_AREA);
}
{
    //Calcula la circunferencia y el área de un círculo dado su radio.
    const NUMERO_PI = Math.PI;
    let radio = 5;

    let perimetro = 2 * NUMERO_PI * radio;
    let areaCirculo = NUMERO_PI * radio ** 2;
    console.log(`El area es: ${areaCirculo.toFixed(2)}\nEl perímetro es: ${perimetro.toFixed(2)}`);
}
{
    //Pasa una temperatura en Celsius a Fahrenheit.
    const FAHRENHEIT_A_CELSIUS = 33.8;
    let gradosCelsius = 25;
    const conversionGrados = gradosCelsius * (9 / 5) + 32;
    console.log(`De celsius a fahrenheit son: ${conversionGrados}`);
}
{
    //Determina si un número es par o impar.
    //nota: número par = 2n; número impar = 2n+-1
    let numero = 2;
    if (numero % 2 == 0) {
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
}
{
    //Lee dos palabras y muéstralas juntas separadas por un espacio.
    let palabra1 = "Hola";
    let palabra2 = "mundo";
    console.log(`${palabra1} ${palabra2}`);
}
{
    //Concatenación de cadenas 
    // Lee dos palabras y muéstralas juntas separadas por un espacio.
    let palabra1 = "Hola";
    let palabra2 = "Mundo";
    const fraseCompleta = `${palabra1} ${palabra2}`;

    console.log(fraseCompleta);
}
{
    // Logitud de texto
    // Calcula cuántos caracteres tiene un string.
    let palabra = "Hola Mundo";
    console.log(palabra.length);
}
{
    // Saludo personalizado
    // Pide al usuario su nombre usando prompt() y salúdalo
    const nombreUsuario = prompt('Ingrese nombre');
    console.log(`Saludos ${nombreUsuario}`);

}
{
    //14. Comparación de dos números
    // Lee dos números y muestra cuál es el mayor o si son iguales
    let numero1 = parseFloat(prompt("Ingrese primer número:"));
    let numero2 = parseFloat(prompt("Ingrese segundo número"));

    if (numero1 > numero2) {
        console.log(`El primer número es mayor ${numero1}`);
    }else if(numero2 > numero1){
        console.log(`El segundo número es mayor ${numero2}`);
    }else{
        console.log("Ambos números son iguales");
    }

}
//--------------------------------------------




//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------





