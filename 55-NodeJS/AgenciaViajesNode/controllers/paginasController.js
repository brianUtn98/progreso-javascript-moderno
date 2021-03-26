import { Viaje } from "../models/Viaje.js"

const paginaInicio = (request, response) => {
  response.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (request, response) => {
  response.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (request, response) => {

    const viajes = await Viaje.findAll();
    console.log(viajes)
    //Consultar base de datos


  response.render("viajes", {
    pagina: "Viajes",
    viajes: viajes
  });
};

const paginaTestimoniales = (request, response) => {
  response.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

const paginaDetalleViaje = async (request,response) => {
    const { id } = request.params

    try{
        const resultado = await Viaje.findOne({ where: {
            slug: id
        }})

        response.render("viaje",{
            pagina: "Informacion viaje",
            viaje: resultado
        })
    } catch {
        console.log(error)
    }
}

export { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes,paginaDetalleViaje };
