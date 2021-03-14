

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

function mostrarOcultarFooter(){
    if(!footer.classList.contains('activo')){
        footer.classList.add('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = "X";
        //this.classList.remove('activo'); funcionaría igual porque el btnFlotante es el que activa el evento.
    } else{
        footer.classList.remove('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = "Idioma y moneda";
        //this.classList.add('activo');
    }
}

btnFlotante.addEventListener('click',mostrarOcultarFooter);