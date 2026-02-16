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
      totalPrice,
      status: "Paid",          // thêm dòng này
      isPaid: true,            // thêm dòng này
      paidAt: Date.now()       // thêm dòng này
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);

  } catch (error) {
    console.log("ORDER ERROR:", error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/my", protect, async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
        .sort({ createdAt: -1 });

    res.json(orders);
});
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // đảm bảo user chỉ xem order của mình
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", protect, async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  if (order.user.toString() !== req.user._id) {
    return res.status(401).json({ message: "Not authorized" });
  }

  res.json(order);
});

export default router;
