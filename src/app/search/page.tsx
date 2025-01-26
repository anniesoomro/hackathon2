"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
  }

  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // Fetch search results when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear results if search query is empty
    }
  }, [searchQuery]);

  // Fetch search results from API
  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`/api/products/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      toast.error("Failed to fetch search results.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <ToastContainer />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search</h1>

        {/* Search Bar */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.length === 0 ? (
            <p className="text-gray-600">No results found.</p>
          ) : (
            searchResults.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
                {/* Product Image */}
                <div className="w-full h-48 mb-4">
                  <img
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600">Rs. {product.price.toFixed(2)}</p>
                </div>

                {/* View Product Button */}
                <button className="w-full bg-yellow-600 text-white py-2 rounded mt-4 hover:bg-yellow-700 transition duration-300">
                  View Product
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}