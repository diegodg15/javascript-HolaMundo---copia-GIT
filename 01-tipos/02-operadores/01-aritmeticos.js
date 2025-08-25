let a = 5;
let b = 3;
//Esto es una declaracion
console.log(a + b, "suma");
console.log(a - b, "resta");
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
//Esto es una expresion

//Operadores de incremento y decremento
console.log(++a);
//Imprime 6, este es preincremento
console.log(a++)
//Imprime 6 y luego 7, este es postincrmeento
console.log(a);

{
    console.log(2 + 2 * 2); // -> 6
    console.log(2 + (2 * 2)); // -> 6
    console.log((2 + 2) * 2); // -> 8

}
{
    const x = 5;
    const y = 2;

    console.log("addition: ", x + y); // -> 7
    console.log("subtraction: ", x - y); // -> 3
    console.log("multiplication: ", x * y); // -> 10
    console.log("division: ", x / y); // -> 2.5
    console.log("division remainder :", x % y); // -> 1
    console.log("exponent: ", x ** y); // -> 25
}

//OPERADORES ARITMÉTICO UNARIOS
{
    let str = "123";
    let n1 = +str;//También sirve para la conversión rápidad de tipos.
    let n2 = -str;
    let n3 = -n2;
    let n4 = +"abcd";
    console.log(`${str} : ${typeof str}`); // -> 123 : string
    console.log(`${n1} : ${typeof n1}`); // -> 123 : number
    console.log(`${n2} : ${typeof n2}`); // -> -123 : number
    console.log(`${n3} : ${typeof n3}`); // -> 123 : number
    console.log(`${n4} : ${typeof n4}`); // -> NaN : number

}

//OPERADORES UNARIOS DE INCREMENTO Y DECREMENTO
{
    /**
     *let n++; --> n = n +1; --> n+=1 
     */
    

    let n1 = 10;
    let n2 = 10;

    console.log(n1); // -> 10
    console.log(n1++); // -> 10 //Esto pasa porque es postincremento, osea la variable la imprime y luego la incrementa.
    console.log(n1); // -> 11

    console.log(n2); // -> 10
    console.log(++n2); // -> 11 //Esto pasa porque es preincremento, osea la variable se incrmeneta y luego se imprime.
    console.log(n2); // -> 11

    let n3 = 20;
    let n4 = 20;

    console.log(n3); // -> 20
    console.log(n3--); // -> 20
    console.log(n3); // -> 19

    console.log(n4); // -> 20
    console.log(--n4); // -> 19
    console.log(n4); // -> 19

    {
        //Otro ejemplo:
        let n = 3;
        while (n < 6) {
            ++n;
            console.log(n); // 4,5, 6
        }
        /**
         * Iteración 1: n = 3 → ++n = 4 → condición 4 < 6 ✅
         * Iteración 2: ++n = 5 → condición 5 < 6 ✅
         * Iteración 3: ++n = 6 → condición 6 < 6 ❌ → se detiene
         * ➡️ Se ejecuta 3 veces, y n toma los valores: 4, 5, 6
         */

        let n2 = 3;
        while (n2 < 6) {
            n2++;
            console.log(n2); // 4,5, 6
        }
        /**
         * Iteración 1: n = 3 → condición 3 < 6 ✅ → n++ = 4
         * Iteración 2: n = 4 → condición 4 < 6 ✅ → n++ = 5
         * Iteración 3: n = 5 → condición 5 < 6 ✅ → n++ = 6
         * Iteración 4: n = 6 → condición 6 < 6 ❌ → se detiene
         * ➡️ Se ejecuta 3 veces, y n toma los valores: 4, 5, 6
         */

        //Estos dos ejemplos imrpimen los mismo aunque uno contenga preincremento y el otro postincremento.

        /**
         * Esto sucede por que el console.log() ya toma los valores almacenadas en la variable, cosa que se hizo en los dos casos,
         * en el preincremento aunque la condicion sea falsa en elúltimo caso, la variable ya cambió de valor. Por eso se imprime
         * 4,5,6.
         * 
         */

        let n3 = 3;
        while(++n3 < 6){
            console.log(n3);//4, 5
        }
        

        let n4 = 3;
        while(n4++ < 6){
            console.log(n4);//4, 5, 6
        }
    }


}

