// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`numero: ${i}`);
// }

const carrito = [
    { nombre: "monitor 27 pulgadas", precio: 500},
    { nombre: "mause", precio: 30},
    { nombre: "celular", precio: 600},
    { nombre: "teclado", precio: 50},
    { nombre: "cpu", precio: 700},
    { nombre: "ram", precio: 200}
]

for(let i = 0; i < carrito.length; i++ ) {
    if(carrito[i].descuento){
        console.log(`el articulo{carrito ${i}.nombre} Tiene descuento `);
        continue;
    }
    console.log(carrito[i].nombre);
}
