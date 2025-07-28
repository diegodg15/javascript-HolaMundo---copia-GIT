/**Crear funcion con dos parametros que nos devuelva la resolución dependiendo de los valores pasados */

/**
 * Nombre : ancho x largo
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * wqhd 2560 x 1440
 * fhd 1920 x 1080
 * hd 1280 x 720
 */

function nombreResolucion(ancho, alto) {
    if(ancho > 7680 && alto > 4320){
        return "8k";
    }else if(ancho > 3840 && alto > 2160){
        return "4k";
    }else if(ancho > 2560 && alto > 1440){
        return "wqhd"
    }else if(ancho > 1920 && alto > 1080){
        return "fhd";
    }

}



let nombre = nombreResolucion(1366, 768);
console.log(nombre);