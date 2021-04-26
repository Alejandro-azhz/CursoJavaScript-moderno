//parametros por default
function saludar(nombre = ' Nombre no registrado' , apellido = 'Apellido no registrado') {
    console.log(`Hola${nombre} ${apellido}`);
}

saludar(' Alejandro', 'Alvarez');
saludar()
