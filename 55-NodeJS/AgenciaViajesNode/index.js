//Commond JS
//const express = require("express")

import express from "express";
import router from "./routes/index.js";
import React from "react";
import db from "./config/db.js";

import dotenv from "dotenv";
const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

//Habilitar PUG
app.set("view engine", "pug");

// Obtener el año actual

app.use((request, response, next) => {
  const year = new Date().getFullYear();

  response.locals.year = year;
  response.locals.nombreSitio = "Agencia de Viajes";

  return next();
});

//Agregar body parser para poder leer los datos del form

app.use(express.urlencoded({ extended: true }));

//Definir carpeta publica
app.use(express.static("public"));

//Agregar router

app.use("/", router);

//Puerto y host para la app

//Definir host
const host = process.env.HOST || "0.0.0.0";

//Definir puerto
const port = process.env.PORT || 4000;

app.listen(port,host, () => {
  console.log(`El servidor esta funcionando en el host ${host} y puerto ${port}`);
});
