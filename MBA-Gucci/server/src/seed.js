import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Product.deleteMany();

await Product.insertMany([
  {
    name: "Gucci Dionysus Bag",
    price: 5200,
    image: "https://images.gucci.com/dionysus.jpg",
    description: "Luxury Gucci handbag",
    category: "bag",
  },
  {
    name: "Gucci Ace Sneakers",
    price: 890,
    image: "https://images.gucci.com/ace.jpg",
    category: "shoes",
  },
]);

console.log("✅ Seed done");
process.exit();
