
import { useCart } from "../context/CartContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
    const navigate = useNavigate();

    const {
        cart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty
    } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const checkoutHandler = async () => {
        try {
            const total = cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

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
            toast.success("Order placed successfully ✨");
            navigate("/payment");

        } catch (error) {
            console.log("CHECKOUT ERROR:", error.response?.data);
            toast.error("Checkout failed");
        }

    };

    return (
        <div className="container">
            <h1>Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item._id}>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>

                            <button onClick={() => decreaseQty(item._id)}>-</button>
                            {item.quantity}
                            <button onClick={() => increaseQty(item._id)}>+</button>

                            <p>Subtotal: ${item.price * item.quantity}</p>

                            <button onClick={() => removeFromCart(item._id)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2>Total: ${total}</h2>
                    <button
                        className="btn-gold"
                        onClick={() => navigate("/payment")}
                    >
                        Checkout
                    </button>


                    <button onClick={clearCart}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}
