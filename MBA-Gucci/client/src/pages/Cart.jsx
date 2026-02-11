import { useEffect, useState } from "react";

export default function Cart({ cart, setCart }) {


    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item._id !== id);

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };


    const clearCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const increaseQty = (id) => {
        const updatedCart = cart.map(item =>
            item._id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decreaseQty = (id) => {
        const updatedCart = cart
            .map(item =>
                item._id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0);

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div
                            key={item._id}
                            style={{
                                border: "1px solid #ccc",
                                padding: "20px",
                                marginBottom: "10px",
                                borderRadius: "8px"
                            }}
                        >
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div>
                                <button onClick={() => decreaseQty(item._id)}>-</button>
                                <span style={{ margin: "0 10px" }}>
                                    {item.quantity}
                                </span>
                                <button onClick={() => increaseQty(item._id)}>+</button>
                            </div>

                            <p>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                    ))}

                    <h2>Total: ${total}</h2>

                    <button onClick={clearCart}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}
