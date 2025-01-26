"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, addToWishlist } from "@/app/redux/store"; // Import actions
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "@/app/redux/store"; // Import RootState

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Fetch cart items
  const dispatch = useDispatch();

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    dispatch(updateQuantity({ id, quantity }));
    toast.success("Quantity updated!");
  };

  // Handle remove item from cart
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from cart!");
  };

  // Handle move item to wishlist
  const handleMoveToWishlist = (item: any) => {
    dispatch(removeFromCart(item._id)); // Remove item from cart
    dispatch(addToWishlist(item)); // Add item to wishlist
    toast.success("Item moved to wishlist!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <Link
              href="/shop"
              className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
              {cartItems.map((item: any) => (
                <div key={item._id} className="flex flex-col md:flex-row items-center border-b pb-4 mb-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 mb-4 md:mb-0">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name || "productimage"}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>npm r

                  {/* Product Details */}
                  <div className="flex-1 md:ml-6">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Rs. {item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-4 md:mt-0">
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                      className="w-12 text-center border-t border-b"
                    />
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    Remove
                  </button>

                  {/* Move to Wishlist Button */}
                  <button
                    onClick={() => handleMoveToWishlist(item)}
                    className="text-blue-600 hover:text-blue-800 ml-4"
                  >
                    Move to Wishlist
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-yellow-600">Rs. {calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <Link
                href="/checkout"
                className="block w-full bg-yellow-600 text-white text-center py-2 rounded mt-6 hover:bg-yellow-700 transition duration-300"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping Button */}
              <Link
                href="/shop"
                className="block w-full bg-gray-600 text-white text-center py-2 rounded mt-4 hover:bg-gray-700 transition duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}