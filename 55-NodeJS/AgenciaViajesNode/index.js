//Commond JS
//const express = require("express")

import express from "express";
import router from "./routes/index.js";
import React from "react";
import db from "./config/db.js"
const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

//Definir puerto

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set("view engine", "pug");

// Obtener el año actual

app.use((request, response, next) => {
  const year = new Date().getFullYear();

  response.locals.year = year;
  response.locals.nombreSitio = "Agencia de Viajes";

  return next();
});

//Definir carpeta publica
app.use(express.static("public"));

//Agregar router

app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
