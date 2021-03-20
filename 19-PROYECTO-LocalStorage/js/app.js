//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event listeners

eventListeners();

function eventListeners() {
    formulario.addEventListener("submit", agregarTweet);

    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];
        crearHTML();
    });
}

//Funciones
function agregarTweet(event) {
    event.preventDefault();

    const texto = document.querySelector("#tweet").value;

    if (texto === "") {
        mostrarError("El tweet no puede estar vacio");
        return;
    }

    const tweet = {
        id: Date.now(),
        texto: texto,
    };

    tweets = [...tweets, tweet];

    document.querySelector("#tweet").value = "";

    crearHTML();
    console.log(tweets);
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("error");

    const contenido = document.querySelector("#contenido");
    const errores = document.querySelectorAll(".error");
    if (errores.length === 0) {
        contenido.appendChild(mensajeError);
    }
    setTimeout(() => {
        mensajeError.remove();
    }, 1500);
}

function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach((tweet) => {
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.textContent = "X";
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };

            const tweetHTML = document.createElement("li");
            tweetHTML.textContent = tweet.texto;
            tweetHTML.appendChild(btnEliminar);
            listaTweets.appendChild(tweetHTML);
        });
    }

    sincronizarLocalStorage();
}

function limpiarHTML() {
    //TODO
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function sincronizarLocalStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function borrarTweet(id) {
    tweets = tweets.filter((tweet) => tweet.id != id);

    crearHTML();
}