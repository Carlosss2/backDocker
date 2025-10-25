import { Router } from "express";
import * as controller from "../controllers/videojuego.controller.js";

const router = Router();

// CRUD
router.get("/videojuegos", controller.getAll);
router.get("/videojuegos/:id", controller.getById);
router.post("/videojuegos", controller.create);
router.put("/videojuegos/:id", controller.update);
router.delete("/videojuegos/:id", controller.remove);

// Endpoint personalizado
router.get("/CastroTrujillo", (req, res) => {
  res.json({ nombreCompleto: "Carlos Gael Castro Trujillo" });
});

export default router;
