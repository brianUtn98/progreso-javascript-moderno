import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";

const paginaInicio = async (request, response) => {
  //Consultar el modelo de viajes para traer 3 viajes
  const promiseDB = []

  promiseDB.push(Viaje.findAll({limit: 3}))
  promiseDB.push(Testimonial.findAll({limit: 3}))


  try {

    const resultado = await Promise.all(promiseDB)
    const viajes = resultado[0]
    const testimoniales = resultado[1]


    response.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: viajes,
      testimoniales: testimoniales
    });
  } catch (error) {
    console.log(error)
  }



};

const paginaNosotros = (request, response) => {
  response.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (request, response) => {
  const viajes = await Viaje.findAll();
  console.log(viajes);
  //Consultar base de datos

  response.render("viajes", {
    pagina: "Viajes",
    viajes: viajes,
  });
};

const paginaTestimoniales = async (request, response) => {
  try {
    const testimoniales = await Testimonial.findAll();

    response.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales: testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaDetalleViaje = async (request, response) => {
  const { id } = request.params;

  try {
    const resultado = await Viaje.findOne({
      where: {
        slug: id,
      },
    });

    response.render("viaje", {
      pagina: "Informacion viaje",
      viaje: resultado,
    });
  } catch {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajes,
  paginaDetalleViaje,
};
