import mongoose from "mongoose";
import bcrypt from "bcryptjs";

mongoose
  .connect("mongodb+srv://theflashgug_db_user:AlvaBee@alva.rqfqby5.mongodb.net/loginApp")
  .then(() => console.log("Conectado"))
  .catch((err) => console.error(err));

const UserSchema = new mongoose.Schema({
  email: String,
  senha: String
});

const User = mongoose.model("User", UserSchema);

async function createUser() {
  const senhaCriptografada = await bcrypt.hash("123456", 10);

  const user = new User({
    email: "admin@admin.com",
    senha: senhaCriptografada
  });

  await user.save();

  console.log("Usuário criado!");
  process.exit();
}

createUser();