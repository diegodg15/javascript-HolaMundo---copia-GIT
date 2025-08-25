let a = 5;
let b = a + 5;

a = a + 5;
a += 5;

console.log(a);
{
    const name = "Alice";
    console.log(name); // -> Alice
}
{
    let year = 2050;
    let newYear = year = 2051;//Si aparecen varios operadores de asignación en una secuencia, se aplica el orden de derecha a izquierda.

    {//Es lo mismo que arriba ^
        let year = 2050;
        year = 2051;
        let newYear = year;
    }
}

//OPERADORES DE ASIGNACIÓN COMPUESTOS
{
    x += 100;
    x = x + 100;

    let x = 10;

    x += 2;
    console.log(x); // -> 12

    x -= 4;
    console.log(x); // -> 8

    x *= 3;
    console.log(x); // -> 24

    x /= 6;
    console.log(x); // -> 4

    x **= 3;
    console.log(x); // -> 64

    x %= 10;
    console.log(x); // -> 4
}