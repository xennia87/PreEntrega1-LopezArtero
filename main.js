// En esta clase se contienen los datos de cada Mascota

class Mascota {
    constructor(nombre, raza, edad, sexo, nombre_dueno) {
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
        this.sexo = sexo
        this.nombre_dueno = nombre_dueno
        this.confirmacion = function() {
            console.log(`Gracias ${this.nombre_dueno} por registrar a ${this.nombre},`)
            if (this.sexo == "Macho" || this.sexo == "macho") {
                console.log(`${this.raza} macho de ${this.edad} años`)
            } else {
                console.log(`${this.raza} hembra de ${this.edad} años`)
            }
            switch (raza) {
                case "gato":
                    console.log("Recuerda: Los gatitos tienen que entrar por la puerta número 2")
                    break;
                case "chihuahua":
                    console.log("Los miércoles es el día del Chihuahua, ¡Te esperamos!");
                    break;
                case "labrador":
                    console.log("Los labradores tienen un 20% de descuento en la tarifa por ser demasiado adorables.");
                    break;
                case "chucho":
                    console.log("Amamos a los perritos sin raza.")
                    break;
            }
        }
    }
}

// En esta función se le pedirán al usuario los datos y se devolverá una confirmación.

function nuevoCliente(){
    nombre = prompt("¿Cómo se llama tu mascota?")
    raza = prompt("Qué raza es? Si no tiene raza, escribe N/A")
    edad = parseInt(prompt("¿Qué edad tiene? (En años. Si tiene menos de un año escribe 1)"))
        while (edad < 1 ) {
            alert("La edad debe ser mayor a cero")
            edad = parseInt(prompt("¿Qué edad tiene?"))
        }
    sexo = prompt("¿Es macho o hembra?")
    nombre_dueno = prompt("Por último, ¿Cuál es tu nombre?")
    
    const mascota = new Mascota(nombre, raza, edad, sexo, nombre_dueno);
    mascota.confirmacion();

    return mascota;
}

// Llamamos a la función para pedir al usuario los datos.

const nuevo_cliente = nuevoCliente()