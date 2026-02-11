import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("API Gucci is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
