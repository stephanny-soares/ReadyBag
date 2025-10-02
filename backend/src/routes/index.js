import { Router } from "express";
import { health } from "../controllers/healthController.js";

const router = Router();

// Ruta raiz
router.get("/", (req, res) => {
  res.send("Servidor backend en ejecución 🚀");
});

// Ruta de prueba / health
router.get("/api/health", health);

export default router;
