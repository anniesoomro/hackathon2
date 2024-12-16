interface ProductCardProps {
    title: string;
    price: string;
    rating: string;
    imageUrl: string;
}


export default function ProductCard({ title, price, rating, imageUrl }:ProductCardProps) {
    return (
       
      <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
        <img src={imageUrl} alt={title} className="w-60 h-48 object-cover mb-4 rounded" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{price}</p>
        <p className="text-yellow-500 font-medium">⭐ {rating}</p>
      </div>
    );
  }