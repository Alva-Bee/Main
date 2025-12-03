import mongoose, { Schema, Document } from "mongoose";

export interface IQuiz extends Document {
  pergunta: string;
  respostas: string[];
  correta: number;
}

const QuizSchema = new Schema<IQuiz>({
  pergunta: { type: String, required: true },
  respostas: [{ type: String }],
  correta: { type: Number, required: true }
});

export default mongoose.model<IQuiz>("Quiz", QuizSchema);
