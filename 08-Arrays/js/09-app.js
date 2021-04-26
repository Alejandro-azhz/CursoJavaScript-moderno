const carrito = [
    { nombre: "monitor 27 pulgadas", precio: 500},
    { nombre: "mause", precio: 30},
    { nombre: "celular", precio: 600},
    { nombre: "teclado", precio: 50},
    { nombre: "cpu", precio: 700},
    { nombre: "ram", precio: 200}
]




for(let i = 0; i < carrito.length; i++) {
    console.log( `${carrito[i].nombre} - precio: ${carrito[i].precio}` );
}


carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - precio ${producto.precio}`);
} )