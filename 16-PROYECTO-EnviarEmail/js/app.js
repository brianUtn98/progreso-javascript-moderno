//Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("#enviar-mail");
//Expresion regular para validar email
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Event listeners
cargarListeners();

function cargarListeners() {
    document.addEventListener("DOMContentLoaded", iniciarApp);

    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
    btnEnviar.addEventListener("click", enviarEmail);
    btnReset.addEventListener("click", resetearFormulario);
}

//Funciones

function iniciarApp() {
    console.log("Iniciando");
    resetearFormulario();
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarFormulario(event) {
    validarCamposObligatorios(event);

    if (event.target.type === "email") {
        validarEmail(event);
    }

    if (asunto.value != "" && mensaje.value != "" && regex.test(email.value)) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add(
        "border",
        "border-red-500",
        "background-red-100",
        "text-red-500",
        "p-3",
        "mt-5",
        "error"
    );

    const errores = document.querySelectorAll(".error");

    if (errores.length == 0) {
        formulario.appendChild(mensajeError);
    }
}

function validarCamposObligatorios(event) {
    if (event.target.value.length > 0) {
        const error = document.querySelector("p.error");
        if (error) {
            error.remove();
        }
        borderCorrecto(event);
    } else {
        borderError(event);
        mostrarError("Todos los campos son obligatorios");
    }
}

function validarEmail(event) {
    if (regex.test(event.target.value)) {
        const error = document.querySelector("p.error");
        if (error) {
            error.remove();
        }
        borderCorrecto(event);
    } else {
        borderError(event);
        mostrarError("Email no valido");
    }
}

function borderError(event) {
    event.target.classList.add("border", "border-red-500");
}

function borderCorrecto(event) {
    event.target.classList.remove("border-red-500", "border");
    event.target.classList.add("border", "border-green-500");
}

function enviarEmail(event) {
    event.preventDefault();

    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none";

        const parrafo = document.createElement("p");
        parrafo.textContent = "El mensaje se envio correctamente";
        parrafo.classList.add(
            "text-center",
            "my-10",
            "p-2",
            "bg-green-500",
            "text-white",
            "font-bold",
            "uppercase"
        );

        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            iniciarApp();
        }, 3000);
    }, 3000);
}

function resetearFormulario() {
    formulario.reset();
}