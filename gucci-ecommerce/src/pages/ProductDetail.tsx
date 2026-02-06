import { useParams } from "react-router-dom";
import { products } from "../data/Products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
      <img
        src={product.image}
        className="w-full h-[500px] object-cover"
      />

      <div>
        <h1 className="text-4xl font-luxury mb-6">{product.name}</h1>
        <p className="text-xl mb-6">{product.price}</p>

        <p className="text-sm text-gray-600 mb-10">
          High-quality luxury fashion product inspired by modern design.
        </p>

        <button className="border border-black px-10 py-3 hover:bg-black hover:text-white transition">
          ADD TO CART
        </button>
      </div>
    </section>
  );
}
