import express from "express";
import { paginaInicio,paginaNosotros,paginaTestimoniales,paginaViajes,paginaDetalleViaje } from "../controllers/paginasController.js"

const router = express.Router();

router.get("/",paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/testimoniales", paginaTestimoniales);

router.get("/viajes", paginaViajes);

//Me gusta utilizar la convención :id, pero como los viajes se identifican por slug uso :slug
router.get("/viajes/:id",paginaDetalleViaje)

export default router;
