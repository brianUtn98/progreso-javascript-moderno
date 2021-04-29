const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
    Notification.requestPermission().then((result) =>
        console.log(`El resultado es ${result}`)
    );
});

const verNotificacionBtn = document.querySelector("#verNotificacion");

verNotificacionBtn.addEventListener("click", () => {
    if (Notification.permission === "granted") {
        const notificacion = new Notification("Nueva notificacion", {
            icon: "img/ccj.png",

            body: "Codigo con Juan, aprende con proyectos Reales",
        });

        notificacion.onclick = function() {
            window.open("https://www.codigoconjuan.com");
        };
    }
});