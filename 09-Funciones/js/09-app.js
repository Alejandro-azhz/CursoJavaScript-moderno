const reproductor = {
    reproducir: function(id) {
        console.log(`reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción... ${id}`);
    },
    agregarPlaylist: function(nombre) {
        console.log(`creando Playlist... ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`reproduciendo la Playlist ${nombre}`);
    }

}



reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('El Amarillento');
reproductor.reproducirPlaylist('El Amarillento');
