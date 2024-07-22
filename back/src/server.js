const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express(); // app contiene el servidor y lo exporta

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Configurar para servir archivos estáticos desde el front-end
app.use(express.static(path.join(__dirname, '../../front/public')));

// Usar el router para las API
app.use(router); // cuando app recibe la solicitud la envia a router

// Ruta para manejar todas las demás peticiones y devolver el archivo HTML principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../front/index.html'));
});

module.exports = app;

