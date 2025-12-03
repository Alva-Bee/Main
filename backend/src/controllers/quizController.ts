import { Request, Response } from "express";
import Quiz from "../models/Quiz";

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Quiz.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { pergunta, respostas, correta } = req.body;
    const q = await Quiz.create({ pergunta, respostas, correta });

    res.status(201).json(q);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
