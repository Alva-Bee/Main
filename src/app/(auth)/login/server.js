import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

// 1. Conexão com o MongoDB
mongoose
  .connect("mongodb+srv://theflashgug_db_user:AlvaBee@alva.rqfqby5.mongodb.net/loginApp")
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.error("Erro no MongoDB:", err));

// 2. Modelo do Usuário
const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  school: { type: String },
  room: { type: String }
});

const User = mongoose.model("User", UserSchema);

// 3. Rota de cadastro
app.post("/register", async (req, res) => {
  try {
    const { name, email, senha, school, room } = req.body;

    // Verifica se email já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Criptografa senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Cria usuário no banco
    await User.create({
      name,
      email,
      senha: hashedPassword,
      school,
      room
    });

    return res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
});

// 4. Rota de login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  // Busca usuário
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Usuário não encontrado" });
  }

  // Compara senha criptografada
  const senhaValida = await bcrypt.compare(senha, user.senha);

  if (!senhaValida) {
    return res.status(400).json({ error: "Senha incorreta" });
  }

  // Gera token
  const token = jwt.sign({ id: user._id }, "SEGREDO_SUPER_SEGURO", {
    expiresIn: "2h",
  });

  return res.json({ message: "Login realizado com sucesso!", token });
});

// 5. Iniciar servidor
app.listen(3001, () =>
  console.log("Servidor rodando em http://localhost:3001")
);
