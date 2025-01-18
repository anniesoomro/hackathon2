"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import { StarIcon } from "@heroicons/react/20/solid";

// Sanity client configuration
const client = createClient({
  projectId: "w9g4wzxk",
  dataset: "production",
  useCdn: true,
});

// Product interface
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  tags?: string[];
  sizes?: string[];
  productImage?: {
    asset?: {
      _id: string;
      url: string;
    };
  };
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        description,
        productImage {
          asset->{
            _id,
            url
          }
        },
        price,
        tags,
        discountPercentage,
        rating,
        ratingCount
      }`;

      try {
        const data = await client.fetch(query);
        console.log("Fetched Products:", data); // Debugging log
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[240px] bg-[url('/bg-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-white font-bold">Products</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-white hover:underline">
                Home
              </Link>
              <span className="text-white">→</span>
              <span className="text-sm text-white">Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm">
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 text-sm">
                <span>Grid view</span>
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>Showing {products.length} results</span>
              <select className="border rounded px-2 py-1">
                <option>Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-2">
                {product.productImage?.asset?.url ? (
                  <Image
                    src={product.productImage.asset.url}
                    alt={product.title}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 italic">
                      Image not available
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <>
                      <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                        $
                        {(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
                      <span className="ml-2 text-sm font-medium text-green-600">
                        {product.discountPercentage}% off
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-600">
                    {product.ratingCount} reviews
                  </p>
                </div>
                {product.tags && product.tags.length > 0 && (
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-800">
                      Tags:{" "}
                    </span>
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-800 mr-1 mb-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/product/${product._id}`}>
                  <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}