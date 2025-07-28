//Permite indiacarle al código donde se tiene que ir dependiendo del valor de una variable

let accion = "listar";

switch (accion) {
    case "listar":
        console.log("Acción de listar");
        break;
    case "guardar":
        console.log("Acción de guardar");
        break;
    default:
        console.log("Acción no reconocida");

}

//con if
if (accion == "listar") {
    console.log("Acción de listar");

} else if (accion == "guardar") {
            console.log("Acción de guardar");
}else if (accion =="no se"){
            console.log("Acción de no se");
}