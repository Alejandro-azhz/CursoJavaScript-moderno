const reproductor = {
    reproducir: id => console.log(`reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    agregarPlaylist: nombre => console.log(`creando Playlist... ${nombre}`),
    reproducirPlaylist: nombre => console.log(`reproduciendo la Playlist ${nombre}`),
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },
    get obetenerCancion() {
        console.log(`${this.cancion}`);
    }

}


reproductor.nuevaCancion = 'Tus ojos';
reproductor.obetenerCancion;    


reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('El Amarillento');
reproductor.reproducirPlaylist('El Amarillento');
