import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


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
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Products
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {products.map(product => (
          <Link
            key={product._id}
            to={`/products/${product._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px"
              }}
            >
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

              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
}
