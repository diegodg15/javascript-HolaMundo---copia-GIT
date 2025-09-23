
//OPERADORES TYPEOF INSTANCEOF

//typeOf
{
    let year = 10191;
    console.log(typeof year); // -> number
    console.log(typeof false); // -> boolean
}

//instanceOf

/* Elinstancia deEl operador apareció al hablar de matrices. Es un operador binario que comprueba si un objeto (operando izquierdo) es de algún tipo (operando derecho). Según el resultado de la prueba, devuelve verdadero o falso.
 */

{
    let names = ["Patti", "Bob"];
    let name = names[0];
    console.log(names instanceof Array); // -> true
    console.log(name instanceof Array); // -> false
}

//delete
{
    let user = {
        name: "Alice",
        age: 38
    };
    console.log(user.age); // -> 38
    delete user.age;
    console.log(user.age); // -> undefined
}

//ternario
{
    console.log(true ? "Alice" : "Bob"); // -> Alice
    console.log(false ? "Alice" : "Bob"); // -> Bob
}
{
    let name = 1 > 2 ? "Alice" : "Bob";
    console.log(name); // -> Bob
}

//Precedencia:
{
    let a = 10;
    let b = a + 2 * 3;
    let c = a + 2 < 20 - 15;
    console.log(a); // -> 10
    console.log(b); // -> 16
    console.log(c); // -> false
}

/* El intérprete de JavaScript utiliza dos propiedades de operador para determinar la secuencia de operaciones: precedencia y asociatividad.La precedencia puede considerarse una prioridad, y algunos operadores tienen la misma precedencia(por ejemplo, la suma y la resta).La asociatividad permite especificar el orden de ejecución si hay varios operadores con la misma prioridad uno al lado del otro.

La precedencia se puede representar como un valor numérico: cuanto mayor sea el valor, mayor será la prioridad de la operación.Si, por ejemplo, un operador OP 1 tiene menor precedencia que OP 2, la instrucción:

a OP 1 b OP 2 c
Se ejecutará de la siguiente manera: primero, OP 2 se ejecutará en los operandos b y c, luego, OP 1 se ejecutará en el operando izquierdo a y el operando derecho, resultantes de OP 2. Por lo tanto, la instrucción podría presentarse de la siguiente manera:

a OP 1(b OP 2 c)
Si realizamos las mismas operaciones(u operaciones diferentes, pero con la misma precedencia), el intérprete utiliza la asociatividad para determinar el orden de las operaciones.Los operadores pueden tener una asociatividad por la izquierda(de izquierda a derecha) o por la derecha(de derecha a izquierda).Supongamos que, en nuestro ejemplo, el operador OP1 tiene asociatividad por la izquierda:

a OP 1 b OP 2 c
En tal situación, la operación OP1 sobre los operandos a y b se realizará primero, seguida de una segunda operación OP1 sobre el resultado recibido y el operando c.Teniendo en cuenta que se trata de asociatividad por la izquierda, podríamos escribir la instrucción de la siguiente forma:

(a OP 1 b ) OP 2 c
De ello se desprende que sería conveniente conocer no solo la precedencia de todos los operadores, sino también su asociatividad.Esto puede parecer un poco abrumador, considerando la cantidad de operadores.Afortunadamente, suele bastar con conocer las propiedades de los operadores más básicos y usar paréntesis en situaciones de duda.Los paréntesis permiten imponer el orden de las operaciones, al igual que en matemáticas.Tenga esto en cuenta al consultar la tabla a continuación.Contiene una lista de operadores que ya conocemos, con su precedencia y asociatividad, por lo que es bastante extensa.No es necesario recordarlo todo si se pueden usar paréntesis para agrupar las operaciones. */

{
    let a, b;
    b = (a = (20 + 20) * 2) > (3 ** 2);
    console.log(a); // -> 60
    console.log(b); // -> true
}