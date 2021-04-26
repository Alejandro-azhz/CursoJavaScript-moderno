const carrito = [
    { nombre: "monitor 27 pulgadas", precio: 500},
    { nombre: "mause", precio: 30},
    { nombre: "celular", precio: 600},
    { nombre: "teclado", precio: 50},
    { nombre: "cpu", precio: 700},
    { nombre: "ram", precio: 200}
]


const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - precio ${producto.precio}`;
} )

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - precio ${producto.precio}`;
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);