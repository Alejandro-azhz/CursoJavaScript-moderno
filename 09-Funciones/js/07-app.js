iniciarApp();

function iniciarApp() {
    console.log('iniciando  App...');

    segundafunction();
}



function segundafunction() {
    console.log('desde la segunda función');

    usuarioAuntenticado('Alejandro');
}



function usuarioAuntenticado(usuario) {
    console.log('autenticando usuario espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}