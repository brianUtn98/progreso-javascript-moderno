let database;

document.addEventListener("DOMContentLoaded", () => {
    crearDB();
})

function crearDB() {
    let crmDB = window.indexedDB.open("crm", 1);

    crmDB.onerror = function() {
        console.error("Error al crear una base de datos")
    }

    crmDB.onsuccess = function() {
        console.log("Base de datos creada")

        database = crmDB.result;
        console.log(database)
    }

    crmDB.onupgradeneeded = function(event) {
        const db = event.target.result;

        const objectStore = db.createObjectStore("crm", {
            keyPath: "crm",
            autoIncrement: true
        });

        //Definición de columnas

        objectStore.createIndex("nombre", "nombre", {
            unique: false
        })
        objectStore.createIndex("apellido", "apellido", {
            unique: false
        })
        objectStore.createIndex("email", "email", {
            unique: true
        })
        objectStore.createIndex("telefono", "telefono", {
            unique: false
        })

        console.log("Columnas creadas")

    }
}

const crearCliente = function(nombre, apellido, email, telefono) {
    console.log(database)
    let tran = database.transaction(["crm"], "readwrite");

    tran.oncomplete = function() {
        console.log("Transacción completada")
    }

    tran.onerror = function() {
        console.error("Hubo un error en la transacción")
    }

    const objectStore = tran.objectStore("crm")

    const nuevoCliente = {
        nombre,
        apellido,
        email,
        telefono
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion)
}