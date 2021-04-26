const dinero = 100;
const totalAPagar = 500;
const Tarjeta = false;

if(dinero >= totalAPagar) {
    console.log("si! podemos pagar")  
} else if (Tarjeta) {
    console.log("si puedo pagar porque tengo la tarjeta")
} else {
    console.log("Fondos insuficientes")
}