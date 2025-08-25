/* 
 *Escribir un algoritmo que devuelva los números impares
 */

// número par = 2*n --> impar = 2*n-1
for(i = 0 ; i <= 10 ; i++){
    if(i % 2 === 0 ){
        console.log(`Número par: ${i}`);

    }else{
        console.log(`Número impar: ${i}`);
    }
}