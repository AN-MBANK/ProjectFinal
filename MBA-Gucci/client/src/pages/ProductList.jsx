import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import "../styles/product.css";


export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="product-title">Products</h1>

      <div className="product-grid">
        {products.map(product => (
          <Link
            key={product._id}
            to={`/products/${product._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="product-card">
              <img
                src={`/images/${product.image}`}
                alt={product.name}
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

}
