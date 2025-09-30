
//POO en javaScript

//creacion de clases:
{
    class auto {
        marca; //modificador de acceso publico
        #modelo; //modificador de acceso privado
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
        mostrarInfo() {//método
            console.log(`Marca: ${this.#modelo}`);
        }

    }
    const miAuto = new Auto("Toyota", "Corolla");
    miAuto.mostrarInfo(); // Marca: Toyota, Modelo: Corolla

    console.log(miAuto.marca);    // ✅ "Toyota"
    // console.log(miAuto.#modelo);  // ❌ Error: campo privado

}
