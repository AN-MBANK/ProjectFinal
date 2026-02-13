import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import "../styles/productDetail.css";

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
        <div className="container">
            <div className="product-detail">

                <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                />

                <div className="product-detail-info">
                    <h2>{product.name}</h2>

                    <div className="product-detail-price">
                        ${product.price}
                    </div>

                    <div className="product-detail-description">
                        {product.description}
                    </div>

                    <button className="btn-gold">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );

}
