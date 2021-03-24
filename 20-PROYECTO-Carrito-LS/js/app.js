const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();

//Funciones

function cargarEventListeners() {
    //Cuando agregas un curso presionando agregar
    listaCursos.addEventListener("click", agregarCurso);
    carrito.addEventListener("click", eliminarCurso);
    vaciarCarrito.addEventListener("click", borrarTodos);
    document.addEventListener("DOMContentLoaded", () => {
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoHTML();
    });
}

function agregarCurso(event) {
    event.preventDefault();
    if (event.target.classList.contains("agregar-carrito")) {
        //Hay que hacer traversing para obtener la información de este curso, ya que event.target almacena el tag <a>
        const curso = event.target.parentElement.parentElement;
        const nuevoCurso = leerCurso(curso);
        agregarAlCarrito(nuevoCurso);
        carritoHTML();
    }
}

function leerCurso(curso) {
    console.log(curso);
    const cursoInfo = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        autor: curso.querySelector("p").textContent,
        precio: curso.querySelector(".precio span").textContent,
        idCurso: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    };

    console.log(cursoInfo);
    return cursoInfo;
}

function agregarAlCarrito(curso) {
    if (articulosCarrito.some((articulo) => articulo.idCurso == curso.idCurso)) {
        aumentarCantidad(curso.idCurso);
    } else {
        articulosCarrito = [...articulosCarrito, curso];
    }
    console.table(articulosCarrito);
}

function aumentarCantidad(id) {
    const indice = articulosCarrito.findIndex(
        (articulo) => articulo.idCurso === id
    );
    articulosCarrito[indice].cantidad++;
}

//Otra forma

// function aumentarCantidad(id) {
//     const cursos = articulosCarrito.map((articulo) => {
//         if (articulo.idCurso === id) {
//             articulo.cantidad++;
//             return articulo;
//         } else {
//             return articulo;
//         }
//     });

//     articulosCarrito = [...cursos];
// }

//Muestra carrito en HTML

function carritoHTML() {
    //Limpiar html
    limpiarHTML();

    articulosCarrito.forEach(
        (curso) => {
        const { imagen, nombre, precio, cantidad, idCurso } = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><img src=${imagen} width=100></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> <a href="#" class="borrar-curso" data-id="${idCurso}")>X</a> </td>
        `;

        //Agrega al contenedor de carrito
        contenedorCarrito.appendChild(row);
    });

    sincronizarLocalStorage();
}

function limpiarHTML() {
    //Forma lenta con innerHTML
    //contenedorCarrito.innerHTML = "";

    //Forma rapida con while

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function eliminarCurso(event) {
    if (event.target.classList.contains("borrar-curso")) {
        const idCurso = event.target.getAttribute("data-id");

        borrarCurso(idCurso);
        carritoHTML();
    }
}

function borrarCurso(id) {
    articulosCarrito = articulosCarrito.filter(
        (articulo) => articulo.idCurso != id
    );
}

function borrarTodos() {
    //Dos formas.

    articulosCarrito = [];
    limpiarHTML();

    //Forma objetosa pero ineficiente
    // articulosCarrito.forEach((articulo) => borrarCurso(articulo.idCurso));
    // limpiarHTML();
}

function sincronizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}