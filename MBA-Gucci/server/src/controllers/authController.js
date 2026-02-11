import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });

    res.json({ message: "Register success", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};