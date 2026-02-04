type ProductProps = {
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
};

export default function ProductCard({
  name,
  price,
  image,
  isNew,
}: ProductProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden">
        {isNew && (
          <span className="absolute top-4 left-4 z-10 bg-black text-white text-xs px-2 py-1">
            NEW
          </span>
        )}

        <img
          src={image}
          alt={name}
          className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-sm tracking-wide mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{price}</p>
      </div>
    </div>
  );
}
