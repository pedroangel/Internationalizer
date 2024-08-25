require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas:", error);
    process.exit(1); // Detiene la aplicación si hay un error en la conexión
  }
};

module.exports = connectDB;
