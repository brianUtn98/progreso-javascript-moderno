const reproductor = {
    reproducir: function(cancion){
        console.log(`Reproduciendo cancion ${cancion}`)
    },
    pausar: function(){
        console.log(`Pausando`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist ${nombre}`)
    }
}

reproductor.reproducir("Welcome to the jungle")
reproductor.pausar()

reproductor.borrar = function(){
    console.log("Borrando cancion");
}

reproductor.borrar()

reproductor.crearPlaylist("Punk rock")

reproductor.reproducirPlaylist("Punk rock")