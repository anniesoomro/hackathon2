import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  rating: string;
  imageUrl: string;
}

export default function ProductCard({ title, price, rating, imageUrl }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <div className="relative w-60 h-48 mb-4">
        <Image 
          src={imageUrl} 
          alt={title} 
          width={240}   // width in pixels
          height={192}  // height in pixels
          className="object-cover rounded" 
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{price}</p>
      <p className="text-yellow-500 font-medium">⭐ {rating}</p>
    </div>
  );
}
