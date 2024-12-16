import Link from "next/link";
import ProductCard from "../components/ProductCard";
import ComparisonTable from "../components/ComparisonTable";

export default function ComparisonPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
       {/* Hero Section */}
       <div className="relative h-[240px] bg-[url('/bg-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-black font-bold">Product Comparison</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-black hover:underline">
                Home
              </Link>
              <span>→</span>
              <span className="text-sm text-black">Comparison</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          <div>
            <h1 className="text-xl font-bold mb-10"><span className="block">Go to Product</span>
            <span className="block"> Page for More</span>
            <span className="block">Products</span></h1>
            <a href="#" className="text-blue-600 underline">View More</a>
          </div>
          

        {/* Product Cards */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-2">
          <ProductCard
            title="Asgaard Sofa"
            price="₹25,000"
            rating="4.7"
            imageUrl="/comparison1.png"
          />
          <ProductCard
            title="Outdoor Sofa Set"
            price="₹24,000"
            rating="4.5"
            imageUrl="/comparison2.png"
          />
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 mb-10 rounded-md shadow hover:bg-yellow-600">
            Add A Product
          </button> 
        
        </div>
        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </div>
  );
}