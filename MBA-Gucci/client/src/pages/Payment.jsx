import { useCart } from "../context/CartContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Payment() {

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    try {
      const orderItems = cart.map(item => ({
        product: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }));

      await api.post("/orders", {
        items: orderItems,
        totalPrice: total
      });

      clearCart();
      toast.success("Payment Successful ✨");
      navigate("/orders");

    } catch (error) {
      toast.error("Payment Failed");
    }
  };

  return (
    <div className="container">
      <h1>Payment</h1>

      <h2>Total: ${total}</h2>

      <button className="btn-gold" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}
