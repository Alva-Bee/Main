import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  senha: string;
  escola: string;
  sala: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  escola: { type: String, required: true },
  sala: { type: String, required: true }
});

export default mongoose.model<IUser>("User", UserSchema);
