import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import Token from "../models/token.js";
import mongoose from "mongoose";
import crypto from "crypto";
import mailverify from "../utils/utils.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    // YORUM:
    const token = new Token({
      userId: new mongoose.Types.ObjectId(),
      token: crypto.randomBytes(16).toString("hex"),
    });
    await token.save();
    console.log(token);
    const link = `http://localhost:3000/api/auth/confirm/${token.token}`;
    mailverify(email, link);
    res.status(201).send({
      message:
        "Kayıt başarılı, sistemi kullanmak için mail adresinizi kontrol ediniz..",
    });
    // BİTİŞ
  } catch (error) {
    next(error);
  }
};

export const confirm = async (req, res) => {
  try {
    const token = await Token.findOne({
      token: req.params.token,
    });
    console.log(token);
    await User.updateOne(
      { _id: token.userId },
      { $set: { mailIsVerified: true } }
    );
    await Token.findByIdAndDelete(token._id);
    res.send("Email başarıyla onaylandı.");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
