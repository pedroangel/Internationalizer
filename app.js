const express = require("express");
const connectDB = require("./config/database");
const textRoutes = require("./routes/textRoutes");
const errorHandler = require("./middlewares/errorHandler"); // Si usas un middleware de manejo de errores

const app = express();

// Conexión a MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api", textRoutes);

// Manejo de errores
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor ejecutándose`);
});
