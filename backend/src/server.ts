import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import quizRoutes from "./routes/quizRoutes";
import { connectDB } from "./config/db";

// config();
// connectDB();

dotenv.config();          // Carrega .env
connectDB();       // Conecta ao DB

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/quiz", quizRoutes);

// app.listen(3001, () => console.log("Backend rodando na porta 3001 🚀"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});