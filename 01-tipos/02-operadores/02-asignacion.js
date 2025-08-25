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