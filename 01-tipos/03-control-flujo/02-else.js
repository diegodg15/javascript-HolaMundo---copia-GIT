let edad2 = 25;

if (edad2 > 17) {
    console.log("usuario mayor de edad2");
} else {
    console.log("usuario menor de edad2");
}


let edad3 = 10;

if (edad3 > 17) {
    console.log("usuario mayor de edad");
} else if (edad3 > 13){
    console.log("usuario necesita ingresar acompañado");
}else{
    console.log("usuario menor de edad");
}
/**
 * Explicacion:
 * ¿El usuario es mayor de 17? 
 * si: puede ingresar
 * sino si: es menor de edad pero, ¿El usuario menor de edad es mayor a 13?
 * si: puede ingresar pero acompañado
 * sino: usuario menor de edad, menor de 17 y menor de 13, no puede ingresar
 */