//Break = salir de loop
//Continue = saltarnos una iteracion

let i = 0;
while(i<6){
    i++;
    if(i === 2){
        continue;//Todo lo que está después del continue, va a ser ignorado y la ejecución volverá al comienzo
    }
    if(i===4){
        break;
    }
    console.log(i);//1,3,4,5,6 sin break
    console.log(i);//1,3 con break 
}