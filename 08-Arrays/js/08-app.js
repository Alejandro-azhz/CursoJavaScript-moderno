const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//const nombre = producto.nombre;
//console.log(nombre);

// Destructuring
const { nombre } = producto;
console.log(nombre);



// Destructuring en arreglos
const numeros = [10,20,30,40,50];

const [primero, ...segundo] = numeros;

console.log(segundo);