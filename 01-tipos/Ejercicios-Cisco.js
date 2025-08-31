//---------------------------------------------------------
//EjerciciosS CISCO JS:

//Ejercicios 2.0.14
/**
 * Pregunta 1: Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:
*el precio de una sola rosa (8) y el número de rosas que tienes (70)
*el precio de un solo lirio (10) y la cantidad de lirios que tienes (50)
*el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
*Ahora declara tres variables, una para cada una de tus rosas, lirios y tulipanes, donde colocarás su precio total. Inserta los valores
*correspondientes en las variables usando las variables declaradas en el paso anterior. Finalmente, declara una variable donde
*almacenarás el precio de todas tus flores (de nuevo, usa las variables anteriores para la inicialización). Muestra toda la información
*del inventario en la consola de la siguiente manera:
* */
/* Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300
   */
{
  let rosePrice = 8;
  let lilyPrice = 10;
  let tulipPrice = 2;

  let numberOfRoses = 70;
  let numberOfLilies = 50;
  let numberOfTulips = 120;

  let rosesValue = rosePrice * numberOfRoses;
  let liliesValue = lilyPrice * numberOfLilies;
  let tulipsValue = tulipPrice * numberOfTulips;

  let total = rosesValue + liliesValue + tulipsValue;
  console.log("Rose - unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
  console.log("Lily - unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
  console.log("Tulip - unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
  console.log("Total: ", total);
}

//---------------------------------------------------------
/* Pregunta 2: Modifique el código del ejemplo anterior.

Supongamos que los precios de las flores se mantendrán constantes (no cambiarán). Declare e inicialice las variables restantes como en el ejemplo anterior. Muestre toda la información recopilada en la consola. Ahora, reduzca el número de rosas en 20 y el de lirios en 30.

Mostrar nuevamente toda la información recopilada en la consola. */

{
  const rosePrice = 8;
  const lilyPrice = 10;
  const tulipPrice = 2;

  let numberOfRoses = 70;
  let numberOfLilies = 50;
  let numberOfTulips = 120;

  let rosesValue = rosePrice * numberOfRoses;
  let liliesValue = lilyPrice * numberOfLilies;
  let tulipsValue = tulipPrice * numberOfTulips;

  let total = rosesValue + liliesValue + tulipsValue;

  console.log("Rose - unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
  console.log("Lily - unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
  console.log("Tulip - unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
  console.log("Total: ", total);

  numberOfRoses = numberOfRoses - 20;
  numberOfLilies = numberOfLilies - 30;

  rosesValue = rosePrice * numberOfRoses;
  liliesValue = lilyPrice * numberOfLilies;
  tulipsValue = tulipPrice * numberOfTulips;

  total = rosesValue + liliesValue + tulipsValue;

  console.log("Rose -unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
  console.log("Lily - unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
  console.log("Tulip - unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
  console.log("Total: ", total);
}

//Otra forma:
{
  const rosa = 8;
  const lirio = 10;
  const tulipan = 2;

  let cantRosa = 70;
  let cantLirio = 50;
  let cantTulipan = 120;

  let precioTotalRosa = rosa * cantRosa;
  let precioTotalLirio = lirio * cantLirio;
  let precioTotalTulipan = tulipan * cantTulipan;

  const precioTotalFlores = precioTotalLirio + precioTotalRosa + precioTotalTulipan;

  console.log("Rosa", "precio unitario:" + rosa + "cantidad:" + cantRosa + "valor:" + precioTotalRosa)
  console.log("Lirio", "precio unitario:" + lirio + "cantidad:" + cantLirio + "valor:" + precioTotalLirio)
  console.log("Tulipan", "precio unitario:" + tulipan + "cantidad:" + cantTulipan + "valor:" + precioTotalTulipan)
  console.log("El precio total es: ", precioTotalFlores);

  cantRosa -= 20; //cantRosa = cantRosa - 20;
  cantLirio -= 30;
  console.log(cantRosa);
  precioTotalRosa = rosa * cantRosa;
  precioTotalRosa = rosa * cantRosa;
  precioTotalLirio = lirio * cantLirio;
  precioTotalTulipan = tulipan * cantTulipan;

  console.log("Rosa", "precio unitario:" + rosa + "cantidad:" + cantRosa + "valor:" + precioTotalRosa)
  console.log("Lirio", "precio unitario:" + lirio + "cantidad:" + cantLirio + "valor:" + precioTotalLirio)
  console.log("Tulipan", "precio unitario:" + tulipan + "cantidad:" + cantTulipan + "valor:" + precioTotalTulipan)
  console.log("El precio total es: ", precioTotalFlores);
}

//---------------------------------------------------------
//Ejercicios 2.1.11
/* Pregunta 1: Escriba un código que creará variables y las inicializará con valores deBooleano,Número,BigInt,Cadena, y tipos indefinidos utilizando (cuando sea posible) literales y funciones constructoras. */
{
  let bool = true;
  let boolBoleano = Boolean(bool);
  let boolBoleano2 = Boolean(true);

  let numeroNuevo = 2;
  let conversionNumeroNuevo = Number(numeroNuevo);
  let conversionNumeroNuevo2 = Number(200);//Funcion constructora


  let texto1 = "hola";
  let texto1String = String(texto1);
  let texto1String2 = String("aloja");

  let bigInt1 = 12n;
  let bigInt1Big = BigInt(bigInt1);
  let bigInt1Big2 = BigInt(200n);

  let ul = undefined;
}

/* Pregunta 2: Imprima todos los valores y todos los tipos de esos valores usando console.log. Intente usar la interpolación de cadenas para mostrar el valor y el tipo simultáneamente con una sola llamada a console.log, por ejemplo, con el siguiente formato: 1000 [número]. */
{
  console.log(`${b1} [${typeof b1}]`);
  console.log(`${b2} [${typeof b2}]`);
  console.log(`${n1} [${typeof n1}]`);
  console.log(`${n2} [${typeof n2}]`);
  console.log(`${bi1} [${typeof bi1}]`);
  console.log(`${bi2} [${typeof bi2}]`);
  console.log(`${s1} [${typeof s1}]`);
  console.log(`${s2} [${typeof s2}]`);
  console.log(`${u1} [${typeof u1}]`);
}
//Otra forma:
{
  console.log(typeof bigInt1, bigInt1); // BigInt 12n
  console.log(` ${typeof bigInt1}, ${bigInt1}`); //BigInt 12
  //En esta línea, estás usando una template literal (las comillas invertidas ``).Cuando interpolas ${bigInt1}, JavaScript convierte el valor a string.Al hacer esta conversión, la n se pierde, porque al pasar de BigInt a string, JavaScript muestra solo el número
  console.log(` ${typeof bigInt1}, ${bigInt1.toString()}n`);
}

/* Pregunta 3: Realizar una cadena de conversiones: crear un booleano a partir de un BigInt creado a partir de un número creado a partir de una cadena. Comenzar con el valor "1234". ¿Es posible? */
{
  let b = Boolean(BigInt(Number("1234")));
  console.log(`${b} [${typeof b}]`);
  // or
  let s = "1234";
  let n = Number(s);
  let bi = BigInt(n);
  let b2 = Boolean(bi);
  console.log(`${b2} [${typeof b2}]`);
}

//Otra forma:
{
  let cadenaTexto = "1234";
  console.log(typeof cadenaTexto, cadenaTexto);

  let cadenaTextoNumero = Number(cadenaTexto);
  console.log(typeof cadenaTextoNumero, cadenaTextoNumero);

  let cadenaNumeroBigInt = BigInt(cadenaTextoNumero);
  console.log(typeof cadenaNumeroBigInt, cadenaNumeroBigInt);

  let cadenaBigIntBooleano = Boolean(cadenaNumeroBigInt);
  console.log(typeof cadenaBigIntBooleano, cadenaBigIntBooleano);

  //Otra forma:
  let b5 = Boolean(BigInt(Number("1234")));
  console.log(`${b5} [${typeof b5}]`);

  //Otra forma:
  let s = "1234";
  let n = Number(s);
  let bi = BigInt(n);
  let b6 = Boolean(bi);
  console.log(`${b6} [${typeof b6}]`);
}

/* Pregunta 4: Intenta sumar dos valores del mismo tipo y comprueba el tipo del resultado. Pruébalo con todos los tipos primitivos.
 */
{
  let b = true + false;
  let n = 100 + 200;
  let bi = 100n + 200n;
  let s = "He" + "llo";
  let u = undefined + undefined;

  console.log(`${b} [${typeof b}]`); // !!! number 
  console.log(`${n} [${typeof n}]`);
  console.log(`${bi} [${typeof bi}]`);
  console.log(`${s} [${typeof s}]`);
  console.log(`${u} [${typeof u}]`); // !!! number
}

/* Pregunta 5: Intente sumar dos valores de diferentes tipos y verifique los resultados.
 */
{
  let b1 = true + 100;
  // let b2 = true + 100n; // -> error!
  let b3 = true + "100";
  // let n1 = 100 + 200n; // -> error!
  let n2 = 100 + true;
  let n3 = 100 + "200";
  // let bi1 = 100n + 200;  // -> error!
  // let bi2 = 100n + true  // -> error!
  let bi3 = 100n + "200";
  let s1 = "100" + 200;
  let s2 = "100" + 200n;
  let s3 = "100" + true;
  let s4 = "abc" + 200;
  let s5 = "abc" + 200n;
  let s6 = "abc" + true;

  console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
  // console.log(`${b2} [${typeof b2}]`);
  console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
  // console.log(`${n1} [${typeof n1}]`);
  console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
  console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
  // console.log(`${bi1} [${typeof bi1}]`);
  // console.log(`${bi2} [${typeof bi2}]`);
  console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
  console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
  console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
  console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
  console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
  console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
  console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]
}

/* Pregunta 6: Intenta modificar la líneaconstante str1 = 42 + "1";para obtener el resultado43(sin quitar las comillas)1).
 */
{
  const str1 = 42 + +"1";
}
//---------------------------------------------------------

//Ejercicios 2.2.3
/* Pregunta 1: Cree un objeto que describa un billete de tren y almacénelo en la variable billete. El objeto debe tener tres campos:

estación de partida (nombre de la clavede, indique el nombre de la estación más cercana en su área como valor);
estación final (nombre de la clavea, indique cualquier otra estación dentro de 100 km como valor);
el precio del billete (nombre clave)precio, indique como valor la cantidad que desearía pagar por este boleto).
El objeto debe crearse entre llaves, donde se listarán inmediatamente todos los campos creados. A continuación, se mostrarán los valores de todos los campos del ticket en la consola. */

{
  let ticket = {
    from: "Berlin",
    to: "Potsdam",
    price: 11
  };
  console.log(`Ticket from: ${ticket.from}`);
  console.log(`Ticket to: ${ticket.to}`);
  console.log(`Ticket price: ${ticket.price}`);
}

//Otra forma:
{
  let ticket = {
    from: "Santiago",
    to: "El Quisco",
    price: 6500
  };
  console.log(ticket);//Listar todo
  console.log(`Pasaje desde : ${ticket.from}`);
  console.log(`Pasaje hasta : ${ticket.to}`);
  console.log(`Pasaje precio : $${ticket.price}`);

}

/* Pregunta 2: Declare un objeto vacío y guárdelo en una variable de persona. Usando la notación de punto, agregue elnombreyapellidoAñada campos al objeto introduciendo sus datos como valores. Intente mostrar los campos individuales en la consola.
 */

{
  let person = {};
  person.name = "Mary";
  person.surname = "Stuart";
  console.log(`${person.name} ${person.surname}`);
}

//Otra forma:
{
  let persona = {};
  persona.nombre = "Alan";
  persona.apellido = "Turing";
  console.log(persona.nombre);
  console.log(persona.apellido);
  console.log(`Nombre:${persona.nombre}, Apellido: ${persona["apellido"]}`);
}

/* Matrices ARRAYS
Pregunta 3: Estamos creando nuestra pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista. Almacenaremos tres datos sobre cada libro: título, autor y número de páginas.

Hablando JavaScript , Axel Rauschmayer, 460;
Programación de aplicaciones JavaScript , Eric Elliott, 254;
Comprensión de ECMAScript 6 , Nicholas C. Zakas, 352.
Crea una matriz de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor y páginas.
 */

{
  let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliot",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
  ];
}

//Otra forma:

{
  let libros = [
    {
      titulo: "Hablando JavaScript",
      autor: "Axel Rauschmayer",
      nroPaginas: 460
    },
    {
      titulo: "Programación de aplicaciones JavaScript",
      autor: "Eric Elliott",
      nroPaginas: 254
    },
    {
      titulo: "Comprensión de ECMAScript 6",
      autor: "Nicholas C. Zakas",
      nroPaginas: 352
    }
  ];
}
/* 
Pregunta 4: Agregar un nuevo libro a la colección: Aprendiendo Patrones de Diseño de JavaScript , de Addy Osmani, 254 páginas. Utilice el método adecuado para ello, que adjuntará el libro al final de la matriz. Muestre la longitud de la matriz y, a su vez, todos los nombres de los libros de la colección. */

{
  let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
  };
  books.push(newBook);
  console.log(books.length);
  console.log(books[0].title);
  console.log(books[1].title);
  console.log(books[2].title);
  console.log(books[3].title);
}

//Otra forma:
{

  //Pregunta 4: Agregar un nuevo libro a la colección: Aprendiendo Patrones de Diseño de JavaScript , de Addy Osmani, 254 páginas. Utilice el método adecuado para ello, que adjuntará el libro al final de la matriz. Muestre la longitud de la matriz y, a su vez, todos los nombres de los libros de la colección.
  libros[3] = {
    titulo: "Aprendiendo Patrones de Diseño de JavaScript",
    autor: "Addy Osmani",
    nroPaginas: 254
  };

  console.log(libros.length);
  console.log(libros);

  //Otra forma:
  let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliot",
    pages: 254
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
  }
  ];

  let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
  };
  books.push(newBook);
  console.log(books.length);
  console.log(books[0].title);
  console.log(books[1].title);
  console.log(books[2].title);
  console.log(books[3].title);
}


/* Pregunta 5: Utilice el comando slice para copiar los dos últimos libros a la nueva matriz.
 */
{
  let selectedBooks = books.slice(-2);
}

/* 
Pregunta 6: El primer libro de la colección se pierde por causas desconocidas. Ya has aceptado la pérdida, así que elimínalo de la matriz. ¿Qué método utilizarás para ello? Muestra la longitud de la matriz y todos los nombres de los libros de la colección, uno por uno.
 */

{
  books.shift();
  console.log(books.length);
  console.log(books[0].title);
  console.log(books[1].title);
  console.log(books[2].title);
}
//Otra forma:
{
  let eliminarPrimerLibro = libros.shift();
}

/* Pregunta 7: Muestra la suma de las páginas de todos los libros de la colección.
 */

{
  let sum = books[0].pages + books[1].pages + books[2].pages;
  console.log(`pages: ${sum}`);
}

//Otra forma:
{
  let sumaPaginasLibro = libros[0].nroPaginas + libros[1].nroPaginas + libros[2].nroPaginas;
  console.log("paginas totales:" + sumaPaginasLibro);
}

//---------------------------------------------------------
/* Ejercicios 2.2.5
Con los mismos datos del laboratorio anterior, crea la lista de contactos como un array, cada elemento del cual será un objeto que describe a un solo usuario. Así, deberíamos obtener un array de tres elementos, y cada objeto que se coloque en él contendrá tres datos (nombre, teléfono y correo electrónico).

Al final de la lista declarada de esta manera, agregue un nuevo contacto mediante el método de matriz correspondiente. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca .

Muestra el primer y el último contacto, nuevamente en el formato: nombre / teléfono / correo electrónico . Usa ellongitudPropiedad del array para determinar el índice del último elemento. Recuerde que los elementos del array se indexan a partir de 0. */
{
  let persona1 = ["Maxwell Wright", "01917196495", "Curabitur.egestas.nuc@nonummyac.co.uk"]
  let persona2 = ["Raja Villareal", "08663982895", "pusuere.vulputatesed.com"]
  let persona3 = ["Helen Richards", "08001111", "libero@convallis.edu"]

  console.log(persona2)
  console.log(persona3)
  console.log(persona4)
}

{
  let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }];
}

// Mostrar el primer y el último contacto
{
  let firstContact = contacts[0];
  let lastContact = contacts[contacts.length - 1];

  console.log("Primer contacto:");
  console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);

  console.log("\nÚltimo contacto:");
  console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
}

//---------------------------------------------------
//2.3.4 PRÁCTICA DE SECCIÓN
/* Tarea: Hay un código que no funciona. Intenta solucionarlo usando solo comentarios. Si es posible, usa los atajos de teclado de tu editor
 */

/**
 * "use  strict";

const  prefix  =  "username_";

let  userName  =  "Jack";
const  userName  =  "Adam";

let  prefixedUserName;
const  prefixedUserName;

userName  =  "John";
prefixedUserName  =  prefix  +  userName;

console.log(prefixedUserName  +  prefixedUserName2);
console.log(prefixedUserName2);

 */
{
  "use strict";

  const prefix = "username_";

  let userName = "Jack";
  // const userName = "Adam"; 

  let prefixedUserName;
  // const prefixedUserName; 

  userName = "John";
  prefixedUserName = prefix + userName;

  console.log(prefixedUserName /*+ prefixedUserName2*/);
  // console.log(prefixedUserName2); 

}

//---------------------------------------------------
//3.0.10 SECCIÓN PRÁCTICA
/* Operadores aritméticos
Ejercicio 1: Complete los operadores faltantes para obtener el resultado esperado (reemplace el símbolo de guión bajo con el operador apropiado): */

/* console.log(2 _ 3 _ 1);      // expected 7  
console.log(2 _ 4);          // expected 16  
console.log(5 _ 1);          // expected 5  
console.log(8 _ 2 _ 5 _ 2);   // expected 39
 */
{
  console.log(2 * 3 + 1);
  console.log(2 ** 4);
  console.log(5 * 1);
  console.log(8 ** 2 - 5 ** 2);
}

/* Operadores de comparación
Ejercicio 2: Complete los operadores de comparación faltantes de tal manera que todas las expresiones resulten enverdadero(reemplace el símbolo de guión bajo con el operador apropiado): */

/* console.log(4 * 5 _ 20);
console.log(6 * 5 _ "30");
console.log(-17 _ 0);  
console.log(25 _ 1);  
console.log(2 + 2 * 2 _ 4); */
{
  console.log(4 * 5 === 20);// Operador de comparación simple (igualdad débil/ loose equiality). Compara solo el valor de los operandos. Si los tipos de datos son diferentes, JavaScript intenta convertirlos a un tipo común antes de realizar la comparación. Esto se conoce como coerción de tipo.
  console.log(6 * 5 == "30");// Operador de comparación estricto (igualdad estricta strict quiality). Compara tanto el valor como el tipo de dato de los operandos. Si los tipos de datos son diferentes, la comparación devuelve false de inmediato, sin intentar ninguna conversión. 
  console.log(-17 < 0);
  console.log(25 > 1);
  console.log(2 + 2 * 2 != 4);
}
/* 
Operadores lógicos
Ejercicio 3: Complete los operadores de comparación faltantes de tal manera que todas las expresiones resulten enverdadero(reemplace el símbolo de guión bajo con el operador apropiado): */
/* 
console.log(true _ false);  
console.log(false _ false);  
console.log(false _ false _ true);  
console.log(true _ false _ false && true);
 */

{
  console.log(true || false);
  console.log(false || ! false);
  console.log(false || false || true);
  console.log(true || false && false && true);
}




