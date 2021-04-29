document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        console.log("Esta viendo esta pagina")
    } else {
        console.log("El usuario no esta viendo esta pagina")
    }
})