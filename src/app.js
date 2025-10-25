import express from "express";
import dotenv from "dotenv";
import videojuegoRoutes from "./routes/videojuego.routes.js"
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());
app.use("/api", videojuegoRoutes);


export default app;
