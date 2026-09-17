import mongoose from "mongoose";
import express from "express";
import type { Request, Response } from "express";
import router from "./routes/index.js";
import { logRequest } from "./middleware/logger.js";
import { checkMaintenance } from "./middleware/maintenance.js";
import { notFound } from "./middleware/notFoundHandler.js";
import { errorHandler, notFoundHandler} from "./middleware/error-handler.js";

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

app.use((req: Request, res: Response, next) => {
  req.user = {
    _id: "6aac2cc7651653244465a681",
  };

  next();
});
app.use(checkMaintenance);
app.use(logRequest);

app.use(router);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});