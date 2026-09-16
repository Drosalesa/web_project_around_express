import mongoose from "mongoose";
import express from "express";
import router from "./routes/index.js";
import { logRequest } from "./middleware/logger.js";
import { checkMaintenance } from "./middleware/maintenance.js";
import { notFound } from "./middleware/notFound.js";

mongoose.connect("mongodb://127.0.0.1:27017/aroundb")
.then(() => {
  console.log("Conectado a MongoDB");
})
.catch((err) => {
  console.log("Error de conexión", err);
});

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(checkMaintenance);
app.use(logRequest);

app.use(router);

app.use(notFound);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});