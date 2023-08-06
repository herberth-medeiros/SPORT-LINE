import express from "express";
import CarrosController from "../controller/CarsController.js";

const router = express.Router();

router
	.get("/cars", CarrosController.listarCarros)
	.get("/cars/:id", CarrosController.listarCarrosId)
	.post("/cars", CarrosController.cadastroCarros)
	.put("/cars/:id", CarrosController.atualizarCarros)
	.delete("/buycar/:id", CarrosController.comprarCarro);

export default router;
  