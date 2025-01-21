"use client";
import { useSelector } from "react-redux"; // Import useSelector
import { RootState } from "@/app/redux/store"; // Import RootState
import Image from "next/image"; // Import Image component

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Fetch cart items from Redux store

  console.log("Cart Items:", cartItems); // Debugging: Log cart items

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {cartItems?.length > 0 ? ( // Use optional chaining
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={item.imageUrl || "/placeholder.svg"} // Use product image or placeholder
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-2">Price: Rs. {item.price}</p>
              <p className="text-gray-600 mb-4">Quantity: {item.quantity}</p>

              {/* Remove Button */}
              <button className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}