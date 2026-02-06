import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-luxury mb-10">Shopping Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      <div className="space-y-8">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-6 items-center">
            <img
              src={item.image}
              className="w-24 h-24 object-cover"
            />

            <div className="flex-1">
              <h3>{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>

            <span>x{item.quantity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
