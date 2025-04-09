let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number
   
let name = "Alice";
console.log(typeof name); // -> string
console.log(typeof "Bob"); // -> string
   
let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string

/*Tipo de dato Boolean*/
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;
   
console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean
//-------------------------------------------------------------
/*Tipo de dato Number*/
const yearNew = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;
   
console.log(year); // -> 1991;
console.log(typeof year); // -> number;

console.log(2 ** 53); // 9007199254740992
console.log(2 ** 53 - 1); // 9007199254740991 (el límite superior exacto)
console.log(-(2 ** 53 - 1)); // -9007199254740991 (el límite inferior exacto)

const bigNumber = BigInt(9007199254740992); // Usar BigInt para números grandes
console.log(bigNumber + 1n); // 9007199254740993n (n indica que es un BigInt)

let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123

let  a2  =  1  /  0;
let  b2  =  -Infinity;
   
console.log(a2);  //  ->  Infinity
console.log(b2);  //  ->  -Infinity
console.log(typeof  a2);  //  ->  number
console.log(typeof  b2);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number Nanes un tipo Number

//-------------------------------------------------------------

/*BigInt */
let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n

let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero

//-------------------------------------------------------------

/*String */

let  country  =  "Malawi";
let  continent  =  'Africa';
   
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string

let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

let  message3  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message4  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows

//Árbol de navidad a l amitad
let hoja = "#"

for(hoja ; hoja.length <= 8 ; hoja+="#")
    console.log(hoja);