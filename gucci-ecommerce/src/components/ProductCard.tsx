import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, image, isNew }: any) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden">
        {isNew && (
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
            NEW
          </span>
        )}

        <img
          src={image}
          className="w-full h-[380px] object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-sm">{name}</h3>
        <p className="text-gray-500 text-sm">{price}</p>
      </div>
    </Link>
  );
}
