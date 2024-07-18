const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express(); //app contiene el servidor y lo exporta

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router); // cuando app recibe la solicitud la envia a router

module.exports = app;