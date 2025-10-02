
import express from "express";
import dotenv from "dotenv";
import indexRouter from "./src/routes/index.js";

dotenv.config();
const app = express();

app.use(express.json());

// Usar rutas
app.get("/", (req, res) => {
  res.send("Servidor backend en ejecución");
});

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

