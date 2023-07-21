const express = require("express");
const port = 3000;

const app = express();
app.use(express.json());

// Cargar rutas
const puntosRetiro = require("./routes/puntosRetiroRoutes");

// Usar rutas
app.use("/api/puntosRetiro", puntosRetiro);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
