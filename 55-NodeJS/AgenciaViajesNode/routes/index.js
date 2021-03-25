import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.render("inicio");
});

router.get("/nosotros", (request, response) => {
  response.render("nosotros");
});

router.get("/contacto", (request, response) => {
  response.send("Contacto");
});

router.get("/testimoniales",(request,response) => {
  response.send("Testimoniales")
})

router.get("/viajes",(request,response) => {
  response.send("Viajes");
})

export default router;
