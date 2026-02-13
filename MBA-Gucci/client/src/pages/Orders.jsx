import { useEffect, useState } from "react";
import api from "../api/api";

export default function Orders() {

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
        <div key={order._id}>
          <h3>Total: ${order.totalPrice}</h3>
          <p>
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
