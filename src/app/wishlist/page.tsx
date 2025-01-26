"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/app/redux/store"; // Import removeFromWishlist action
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "@/app/redux/store"; // Import RootState

export default function Wishlist() {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items); // Fetch wishlist items
  const dispatch = useDispatch();

  // Handle remove item from wishlist
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromWishlist(id)); // Remove item from wishlist
    toast.error("Item removed from wishlist!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Your wishlist is empty.</p>
            <Link
              href="/shop"
              className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Wishlist Items */}
            {wishlistItems.map((item) => (
              <div key={item._id} className="bg-white shadow-lg rounded-lg p-6">
                {/* Product Image */}
                <div className="w-full h-48 mb-4">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">Rs. {item.price.toFixed(2)}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}