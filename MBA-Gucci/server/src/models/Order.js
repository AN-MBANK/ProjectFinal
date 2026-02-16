import mongoose from "mongoose";
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },

    // 🔥 NEW FIELDS
    isPaid: {
      type: Boolean,
      default: true, // tạm để true vì bạn đang fake payment
    },
    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
