"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/store"; // Import addToCart action
import sanityClient from "@sanity/client";

// Sanity Client Configuration
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  tags?: string[];
  sizes?: string[];
  imageUrl?: string;
}

interface Review {
  id: string; // Unique ID for each review
  user: string; // Name of the user
  rating: number; // Rating (1 to 5)
  comment: string; // Review comment
  date: string; // Date of the review
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const dispatch = useDispatch(); // Use useDispatch hook

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0]`;
        const data = await client.fetch(query, { id });
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Fetch reviews from local storage
  useEffect(() => {
    const storedReviews = getReviewsFromLocalStorage(id as string);
    setReviews(storedReviews);
  }, [id]);

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    if (product) {
      const cartItem = { ...product, quantity: 1 }; // Default quantity
      dispatch(addToCart(cartItem)); // Dispatch the addToCart action
      toast.success("Product added to cart!");
    }
  };

  // Add a new review
  const addReview = (newReview: Review) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    saveReviewsToLocalStorage(id as string, updatedReviews);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found or failed to load.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Product Image */}
        <div className="md:flex-1 px-4">
          <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.title}
                width={460}
                height={460}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500 italic">Image not available</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>

          {/* Price */}
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700">Price:</span>
              <span className="text-gray-600">Rs. {product.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="py-2 px-4 rounded-md transition duration-300 bg-yellow-600 text-white hover:bg-yellow-700"
          >
            Add to Cart
          </button>

          {/* Display Reviews */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <div className="flex items-center">
                    <span className="font-bold">{review.user}</span>
                    <span className="ml-2 text-yellow-500">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>

          {/* Review Form */}
          <ReviewForm productId={product._id} addReview={addReview} />
        </div>
      </div>
    </div>
  );
}

// ReviewForm Component
const ReviewForm = ({ addReview }: { productId: string; addReview: (review: Review) => void }) => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview: Review = {
      id: Date.now().toString(), // Unique ID
      user,
      rating,
      comment,
      date: new Date().toISOString(),
    };

    addReview(newReview);

    // Reset form
    setUser("");
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h3 className="text-xl font-bold mb-4">Add a Review</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        >
          <option value={0}>Select Rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded">
        Submit Review
      </button>
    </form>
  );
};

// Local Storage Functions
const getReviewsFromLocalStorage = (productId: string): Review[] => {
  const reviews = localStorage.getItem(`reviews_${productId}`);
  return reviews ? JSON.parse(reviews) : [];
};

const saveReviewsToLocalStorage = (productId: string, reviews: Review[]) => {
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
};
