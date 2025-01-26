"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Account() {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [orders, setOrders] = useState<{ id: number; total: number; status: string }[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user profile and orders on page load
  useEffect(() => {
    fetchUserProfile();
    fetchOrders();
  }, []);

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await fetch("/api/user/123"); // Replace "123" with the actual user ID
      const data = await response.json();
      setUser(data);
    } catch (error) {
      toast.error("Failed to fetch user profile.");
      console.error(error); // Log the error for debugging
    }
  };

  // Fetch order history
  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders?userId=123"); // Replace "123" with the actual user ID
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      toast.error("Failed to fetch orders.");
      console.error(error); // Log the error for debugging
    }
  };

  // Handle profile update
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/123", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      toast.error("Failed to update profile.");
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>

        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          {isEditing ? (
            <form onSubmit={handleUpdateProfile}>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Phone</label>
                  <input
                    type="tel"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-24 font-medium">Name:</span>
                <span className="text-gray-600">{user.name}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">Email:</span>
                <span className="text-gray-600">{user.email}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">Phone:</span>
                <span className="text-gray-600">{user.phone}</span>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition duration-300"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>

        {/* Orders Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-600">No orders found.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex justify-between items-center">
                  <span className="text-gray-600">Order #{order.id}</span>
                  <span className="text-gray-600">Rs. {order.total.toFixed(2)}</span>
                  <span className="text-gray-600">{order.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}