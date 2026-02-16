import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders/my")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>My Orders</h1>

      {orders.map(order => (
        <div
          key={order._id}
          onClick={() => navigate(`/orders/${order._id}`)}
          style={{ cursor: "pointer" }}
        >
          <h3>Total: ${order.totalPrice}</h3>
          <p>{new Date(order.createdAt).toLocaleString()}</p>
          <p>Status: {order.status}</p>
        </div>

      ))}
    </div>
  );
}
