const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const prodcuto2 = new producto( 'Monitor 24 pulgadas', 500);
console.log(producto2);

const producto3 = new producto('television', 100);
console.log(producto3);
