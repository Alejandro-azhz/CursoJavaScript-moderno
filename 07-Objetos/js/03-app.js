const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Agragar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

//eliminar nuevas propiedades al objeto
delete producto.disponible;


console.log(producto);