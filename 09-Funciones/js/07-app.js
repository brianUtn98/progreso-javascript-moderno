function iniciarApp(){
    console.log("Iniciando app...")

    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda funcion")
    usuarioAutenticado('Brian');
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario...")
    console.log(`Usuario autenticado ${usuario}`)
}

iniciarApp();