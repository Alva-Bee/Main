import { Request, Response } from "express";
import User from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, senha, escola, sala } = req.body;

    const novo = await User.create({
      name,
      email,
      senha,
      escola,
      sala
    });

    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.senha !== senha)
      return res.status(401).json({ message: "Credenciais inválidas" });

    res.json({ message: "Login OK", user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
