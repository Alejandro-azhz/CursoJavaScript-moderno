const carrito = [];

//Definir un producto
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "celular",
    precio: 800
}

const producto4 = {
    nombre: "celular2",
    precio: 600
}


//.push agrega al final del arreglo

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre: "teclado",
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);

// Eliminar último elemento del arreglo
//carrito.pop();
//console.table(carrito);

// Elimina el primer elemento del arreglo
//carrito.shift();
//console.table(carrito);

carrito.splice()
console.table(carrito);