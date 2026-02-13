import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";
import "../styles/productDetail.css";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {

    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);

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

                    <button
                        className="btn-gold"
                        onClick={() => {
                            addToCart(product);
                            toast.success("Added to cart ✨");
                        }}
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
}

