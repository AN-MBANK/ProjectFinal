import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await api.get(`/orders/${id}`);
      setOrder(data);
    };

    fetchOrder();
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Order Detail</h1>

      <p><strong>Order ID:</strong> {order._id}</p>
      <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

      <p>
        <strong>Status:</strong>{" "}
        {order.isPaid ? "✅ Paid" : "❌ Not Paid"}
      </p>

      <h2>Items</h2>
      {order.items.map(item => (
        <div key={item.product}>
          <p>{item.name}</p>
          <p>${item.price} x {item.quantity}</p>
        </div>
      ))}

      <h2>Total: ${order.totalPrice}</h2>
    </div>
  );
}
