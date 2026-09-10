import express from "express";
import router from "./routes/index.js";
import { logRequest } from "./middleware/logger.js";
import { checkMaintenance } from "./middleware/maintenance.js";
import { notFound } from "./middleware/notFound.js";

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