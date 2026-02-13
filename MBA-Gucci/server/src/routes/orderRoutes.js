import express from "express";
import Order from "../models/Order.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
    try {
        const { items, totalPrice } = req.body;

        const order = new Order({
            user: req.user._id,
            items,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);

    } catch (error) {
        console.log("ORDER ERROR:", error);
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }

});

router.get("/my", protect, async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
        .sort({ createdAt: -1 });

    res.json(orders);
});

export default router;
