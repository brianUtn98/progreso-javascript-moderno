//Eliminar elementos en el DOM


const primerEnlace = document.querySelector('a');

console.log(primerEnlace);

//Primera forma
primerEnlace.remove()

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children)

navegacion.removeChild(navegacion.children[1]);