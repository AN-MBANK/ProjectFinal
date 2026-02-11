import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function ProductDetail({ cart, setCart }) {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const addToCart = () => {
        const existingItem = cart.find(item => item._id === product._id);

        let updatedCart;

        if (existingItem) {
            updatedCart = cart.map(item =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        alert("Added to cart!");
    };

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div style={{ padding: "40px" }}>
            <img
                src={`/images/${product.image}`}
                alt={product.name}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "10px"
                }}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <button
                onClick={addToCart}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    background: "#fff",
                    color: "#000",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}
            >
                Add to Cart
            </button>

        </div>
    );
}
