import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import Token from "../models/token.js";
import mongoose from "mongoose";
import crypto from "crypto";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "Kayıt başarılı!" });
    const token = new Token({
      userId: new mongoose.Types.ObjectId(),
      token: crypto.randomBytes(16).toString("hex"),
    }); // YORUM İÇİN BEKLE....
    await token.save();
    console.log(token);
  } catch (error) {
    next(error);
  }
};
