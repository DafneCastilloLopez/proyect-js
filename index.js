// comentarios
/** comentatio de 

let ancho
console.log("liam");

alert("te amo")

let example = prompt("Ingrese su nombre:")

console.log(example)



let frio = false;
let calor = true 

if (calor) {
    console.log("Este codigo se ejecuta! Y decimos: ");
    console.log("Apaguen la calefaccion! Me estoy asando! ");
}
if (frio) {
    console.log("Este codigo se ejecuta! Y decimos: ");
    console.log("Enciendan la calefaccion! ");
} else{
    console.log("No, no hace frio")
}

let botonLuz = "Encendido";
console.log(botonLuz == "Apagado")
console.log(botonLuz == "Encendido")

 * muchas lineas */


// Introduccion
alert("Bienvenido a la mini aventura!");

// Preguntamos el nombre y saludamos
let nombreJugador = prompt("Como te llamas?");

alert(
    "Hola!, ${nombreJugador}! Te encuentras en los caminos. Tu aventura esta por comenzar."
);

// Primera eleccion
let eleccion1 = prompt("¿Quieres ir a la izquierda o a la derecha?") .toLowerCase();


if (eleccion1 === "izquierda") {
    let eleccion11 = prompt ("Caminas por la izquierda y encuentras una cueva. Quieres entrar? (si/no)").toLowerCase();
    if (eleccion11 === "si") {
        alert("Entras en la cueva y encontraras un cofre lleno de oro! Felicidades ha ganado!");
        
    } else if (eleccion11 === "no") {
        alert("Decides no entrar a la cueva y seguir tu camino. Sigue explorando!")
    }

}
alert("Gracias por jugar!");

answer = prompt (
    "Desea jugar de nuevamente? (si/no)"
).toLowerCase();





function Productos (nombre, descripcion, codigo, cantidad, descuento, precio, color) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.cantidad = cantidad;
    this.descuento = descuento;
    this.precio = precio;
}

const zapatillasNike = new Productos("Nike", "Nike Air Jordan", 4859403, 2, false, 50.000);
const remera = new Productos("Overside", "Outsider", 4.000, 4, true, 85, "Negro");



