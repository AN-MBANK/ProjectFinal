import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="font-luxury text-3xl text-gold mb-4">
        Product Detail
      </h1>
      <p className="text-gray-400">Product ID: {id}</p>
    </div>
  );
}
