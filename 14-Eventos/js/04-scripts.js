const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault(); //previene la acción por default.

  console.log(event);
}
