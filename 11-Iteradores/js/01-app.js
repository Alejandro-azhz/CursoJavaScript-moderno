// for(let i = 0; i <= 10; i++){
//     console.log(`numero: ${i}`);
// }


// for(let i = 0; i <= 20; i++){
//     if( i % 2 === 0 ) {
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es INPAR`);
//     }
// }

const carrito = [
    { nombre: "monitor 27 pulgadas", precio: 500},
    { nombre: "mause", precio: 30},
    { nombre: "celular", precio: 600},
    { nombre: "teclado", precio: 50},
    { nombre: "cpu", precio: 700},
    { nombre: "ram", precio: 200}
]

console.log( carrito.length);

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito [i].nombre);
}