const resultado = document.querySelector("#resultado");

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 20;

const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);

    //llenar opciones de años
    llenarSelect();
});

marca.addEventListener("change", (event) => {
    datosBusqueda.marca = event.target.value;

    filtrarAuto();
});

year.addEventListener("change", (event) => {
    datosBusqueda.year = parseInt(event.target.value);

    filtrarAuto();
});

minimo.addEventListener("change", (event) => {
    datosBusqueda.minimo = parseInt(event.target.value);

    filtrarAuto();
});

maximo.addEventListener("change", (event) => {
    datosBusqueda.maximo = parseInt(event.target.value);

    filtrarAuto();
});

puertas.addEventListener("change", (event) => {
    datosBusqueda.puertas = parseInt(event.target.value);

    filtrarAuto();
});

transmision.addEventListener("change", (event) => {
    datosBusqueda.transmision = event.target.value;

    filtrarAuto();
});

color.addEventListener("change", (event) => {
    datosBusqueda.color = event.target.value;

    filtrarAuto();
});

function mostrarAutos(listaAutos) {
    listaAutos.forEach((auto) => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement("p");
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} puertas - ${color} - ${transmision}: $${precio} 
        `;

        resultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAuto() {
    const autosFiltrados = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    limpiarHTML();

    if (autosFiltrados.length) {
        mostrarAutos(autosFiltrados);
    } else {
        noHayResultados();
    }
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.minimo === minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.maximo === maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function noHayResultados() {
    limpiarHTML();

    const mensaje = document.createElement("div");
    mensaje.classList.add("alerta", "error");
    mensaje.textContent = " No hay resultados disponibles para su busqueda.";
    resultado.appendChild(mensaje);
}