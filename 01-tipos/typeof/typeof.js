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
