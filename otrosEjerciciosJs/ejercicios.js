//---------------------------------------------------------
//Ejercicio N°1:
/**
 * Calcular la cantidad de segundos que están incluidos en el numero de horas, minutos y segundos ingresados por el usuario.
 */
{
    const SEGUNDOS = 60;
    let horas = null;
    let minutos = null;
    let segundos = null;
    function conversionAsegundos(horas, minutos, segundos) {
        let conversion = horas * (SEGUNDOS ** 2) + minutos * SEGUNDOS + segundos;
        let resultado = conversion;
        return console.log(`EL resultado es:${resultado} segundos`);

    }
    conversionAsegundos(2, 24, 32);
}

//Otra forma:
{
    const SEGUNDOS_POR_MINUTO = 60;
    const SEGUNDOS_POR_HORA = 3600;//60*60

    function conversionAsegundos(horas, minutos, segundos) {
        const totalSegundos = horas * SEGUNDOS_POR_HORA + minutos * SEGUNDOS_POR_MINUTO + segundos;
        console.log(`El resultado es: ${totalSegundos} segundos`);
    }

    conversionAsegundos(2, 24, 32); // Resultado: 8662 segundos
    //Evita usar return console.log(...) si no necesitas devolver nada. Si quieres que la función devuelva el valor
    /**
     * console.log("Hola") imprime "Hola" en la consola.return console.log("Hola") también imprime "Hola", 
     * pero devuelve undefined, porque console.log() no devuelve ningún valor útil.
     */
}

//Otra forma:
{
    const SEGUNDOS_POR_MINUTO = 60;
    const MINUTOS_POR_HORA = 60;

    function convertirASegundos(horas, minutos, segundos) {
        return horas * MINUTOS_POR_HORA * SEGUNDOS_POR_MINUTO
            + minutos * SEGUNDOS_POR_MINUTO
            + segundos;
    }

    const totalSegundos = convertirASegundos(2, 24, 32);
    console.log(`El resultado es: ${totalSegundos} segundos`);
}

//---------------------------------------------------------
//Ejercicio N°2:
/**
 *  Hacer un programa para ingresar el radio de un circulo y que calcule el área y la longitud de la circunferencia.
 */
{
    const PI = Math.PI;
    function calculoAreaLongitud(r) {
        let area = PI * (r ** 2);
        let longitud = (2 * PI * r);
        return console.log(`El valor del área es ${area} y el valor de la longitud es ${longitud}`)
    }
    calculoAreaLongitud(2)
}

//Otra forma:
{
    const PI = Math.PI;

    function calculoAreaLongitud(r) {
        let area = PI * (r ** 2);
        let longitud = 2 * PI * r;
        return {
            area: area.toFixed(2),
            longitud: longitud.toFixed(2)
        };
    }

    const resultado = calculoAreaLongitud(2);
    console.log(`Área: ${resultado.area}, Longitud: ${resultado.longitud}`);
}

//Otra forma:
{
    function calcularAreaYLongitud(radio) {
        const area = (Math.PI * radio ** 2).toFixed(2);
        const longitud = (2 * Math.PI * radio).toFixed(2);
        return { area, longitud }; // Retorna objeto
    }

    const resultado = calcularAreaYLongitud(2);
    console.log(`Área: ${resultado.area}, Longitud: ${resultado.longitud}`
    );
}

//---------------------------------------------------
//Ejercicio N°3:
/**
 * Un maestro desea saber que porcentaje de hombres y de mujeres hay en un grupo de estudiantes. 
 * @param {number} numeroHombres - El número de hombres en el grupo.
 * @param {number} numeroMujeres - El número de mujeres en el grupo.
 * Eso que ves se llama JSDoc, y es una forma de documentar código en JavaScript. Es como una etiqueta que le pones a una función para *  * explicar qué hace, qué información necesita para funcionar, y qué tipo de datos devuelve.
 *  En este caso, la sintaxis **@param** sirve para describir los parámetros o argumentos que la función necesita recibir.
 */
{
    function calculoPorcentajes(n1, n2) {
        const sumaAlumnos = n1 + n2;
        let conversionPorcentajeHombres = (n1 / sumaAlumnos) * 100;
        let conversionPorcentajeMujeres = (n2 / sumaAlumnos) * 100;
        return console.log(`El porcetaje de hombres es: ${conversionPorcentajeHombres} y el de mujeres es ${conversionPorcentajeMujeres}`)

    }
    calculoPorcentajes(2, 3)
}

//Otra forma:
{
    function calcularPorcentajes(numeroHombres, numeroMujeres) {
        // Aseguramos que los números sean positivos para evitar errores.
        if (numeroHombres < 0 || numeroMujeres < 0) {
            console.error("Los números de estudiantes no pueden ser negativos.");
            return; // Detenemos la función si los datos son inválidos.
        }

        const totalAlumnos = numeroHombres + numeroMujeres;

        // Manejamos el caso de que no haya alumnos para evitar la división por cero.
        if (totalAlumnos === 0) {
            console.log("No hay alumnos en el grupo.");
            return { porcentajeHombres: 0, porcentajeMujeres: 0 };
        }

        // Calculamos los porcentajes.
        const porcentajeHombres = (numeroHombres / totalAlumnos) * 100;
        const porcentajeMujeres = (numeroMujeres / totalAlumnos) * 100;

        // Devolvemos un objeto con los resultados.
        return {
            porcentajeHombres: porcentajeHombres.toFixed(2), // toFixed(2) para 2 decimales
            porcentajeMujeres: porcentajeMujeres.toFixed(2)
        };
    }

    // Ejemplo de uso:
    const resultados = calcularPorcentajes(2, 3);
    if (resultados) {
        console.log(`El porcentaje de hombres es: ${resultados.porcentajeHombres}% y el de mujeres es: ${resultados.porcentajeMujeres}%`);
    }
}

//Otra forma:
{
    function calcularPorcentajes(hombres, mujeres) {
        const totalAlumnos = hombres + mujeres;

        if (totalAlumnos === 0) {
            return {
                porcentajeHombres: 0,
                porcentajeMujeres: 0
            };
        }

        return {
            porcentajeHombres: (hombres / totalAlumnos * 100).toFixed(2),
            porcentajeMujeres: (mujeres / totalAlumnos * 100).toFixed(2)
        };
    }

    // Uso de la función
    const resultado = calcularPorcentajes(2, 3);
    console.log(`El porcentaje de hombres es: ${resultado.porcentajeHombres}% y el de mujeres es: ${resultado.porcentajeMujeres}%`);
}
// Ejemplo con un caso inválido:
// calcularPorcentajes(-1, 5); // Esto mostrará un mensaje de error en la consola}

//---------------------------------------------------------
//Ejercicio N°4:
/**
 * Un profesor prepara tres examenes: A, B y C. Se sabe que se tarda 5 minutos en revisar el examen A, 8 minutos en el B y 6 minutos en el C. La cantidad de examenes de cada tipo se ingresan. ¿Cuántas horas y minutos se tarda en revisar todos los examenes?
 */
{
    const MINUTOS = 60;
    const minutosExamenA = 5;
    const minutosExamenB = 8;
    const minutosExamenC = 6;

    function calculoHorasMinutosExamen(a, b, c) {
        const tiempoExamenA = a * minutosExamenA;
        const tiempoExamenB = b * minutosExamenB;
        const tiempoExamenC = c * minutosExamenC;
        const tiempoTotal = tiempoExamenA + tiempoExamenB + tiempoExamenC;

        let horas = tiempoTotal / MINUTOS;
        let redondeoHoras = Math.trunc(horas);
        let minutosDeHora = tiempoTotal % 60;

        console.log(`Se tardará: ${redondeoHoras} horas y ${minutosDeHora} minutos`);

    }
    calculoHorasMinutosExamen(5, 3, 4);
}

//Otra forma:
{
    const MINUTOS = 60;
    const minutosExamenA = 5;
    const minutosExamenB = 8;
    const minutosExamenC = 6;

    function calculoHorasMinutosExamen(a, b, c) {
        const tiempoExamenA = a * minutosExamenA;
        const tiempoExamenB = b * minutosExamenB;
        const tiempoExamenC = c * minutosExamenC;
        const tiempoTotal = tiempoExamenA + tiempoExamenB + tiempoExamenC;

        const horas = Math.floor(tiempoTotal / MINUTOS);
        const minutosDeHora = tiempoTotal % MINUTOS;

        console.log(`Se tardará: ${horas} horas y ${minutosDeHora} minutos`);
    }

    calculoHorasMinutosExamen(5, 3, 4);
}

//Otra forma:
{
    function calcularTiempoExamenes(cantA, cantB, cantC) {
        const TIEMPO_A = 5;  // minutos por examen
        const TIEMPO_B = 8;
        const TIEMPO_C = 6;
        const MINUTOS_POR_HORA = 60;

        const tiempoTotalMinutos =
            cantA * TIEMPO_A +
            cantB * TIEMPO_B +
            cantC * TIEMPO_C;

        const horas = Math.floor(tiempoTotalMinutos / MINUTOS_POR_HORA);
        const minutos = tiempoTotalMinutos % MINUTOS_POR_HORA;

        return { horas, minutos, totalMinutos: tiempoTotalMinutos };
    }

    // Uso de la función
    const resultado = calcularTiempoExamenes(5, 3, 4);
    console.log(`Se tardará: ${resultado.horas} horas y ${resultado.minutos} minutos (Total: ${resultado.totalMinutos} minutos)`);
}

//---------------------------------------------------------
//Ejercicio N°5:
//Ejercicio N°5:
//Ejercicio N°5:
//Ejercicio N°5:
//Ejercicio N°5:
//Ejercicio N°5:
//Ejercicio N°5:
//Ejercicio N°5: