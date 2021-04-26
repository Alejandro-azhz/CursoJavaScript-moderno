const usuario = true;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log("si puedes comprar");
}   else if(!puedePagar && !usuario) {
    console.log("no puedes comprar");
} else if(!usuario) {
    console.log("inicia sesion o saca una cuenta");
} else if(!puedePagar) {
    console.log('fondos insuficientes');
} 