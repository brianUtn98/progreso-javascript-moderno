import { Testimonial } from "../models/Testimonial.js";

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const guardarTestimonial = async (request, response) => {
  //Validando el formulario

  const { nombre, correo, mensaje } = request.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacío" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vacío" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }

  if (!regex.test(correo)) {
    errores.push({
      mensaje:
        "Debe ingresar un correo valido. Por ejemplo juan@electroconsat.com",
    });
  }

  if (errores.length > 0) {
    const testimoniales = await Testimonial.findAll();
    //Mostrar la vista con errores
    response.render("testimoniales", {
      pagina: "Testimoniales",
      errores: errores,
      nombre: nombre,
      correo: correo,
      mensaje: mensaje,
      testimoniales: testimoniales,
    });
  } else {
    //Almacenar en la base de datos
    try {
      await Testimonial.create({
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
      });

      response.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
