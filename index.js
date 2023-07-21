const express = require("express");

const app = express();
app.use(express.json());

// Cargar rutas
const puntosRetiro = require("./routes/puntosRetiroRoutes");

// Usar rutas
app.use("/api/puntosRetiro", puntosRetiro);

module.exports = app;
