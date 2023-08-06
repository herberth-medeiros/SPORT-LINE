import express from "express";
import db from "./config/dbConnect.js";
import router from "./routes/routesCars.js";

const app = express();

app.use(express.json());

app.use(router);

export default app;

db.once("open", () => {
	console.log("Conexao com o banco realizada");
});

