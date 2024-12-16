import Image from "next/image";
import Link from "next/link";

export default function Billing() {
    return (
        <div className="min-h-screen">
        <div className="relative h-[240px] bg-[url('/bg-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-black font-bold">Checkout</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-black hover:underline">
                Home
              </Link>
              <span>→</span>
              <span className="text-sm text-black">Checkout</span>
            </div>
          </div>
        </div>
      </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6">
            {/* Billing Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Company Name (Optional)</label>
                  <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Country/Region</label>
                  <select className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300">
                    <option>Select a country</option>
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Street Address</label>
                  <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    className="border p-2 mt-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Apartment, suite, unit (optional)"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Town/City</label>
                  <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Province</label>
                  <input
                    type="text"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Phone</label>
                  <input
                    type="tel"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Email Address</label>
                  <input
                    type="email"
                    className="border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </form>
            </div>
              
            {/* Order Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Order</h2>
              <div className="border rounded p-4">
                <div className="flex justify-between font-medium mb-2">
                  <span>Product</span>
                  <span>Total</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Sample Product</span>
                  <span>Rs. 350,000.00</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-yellow-600">Rs. 350,000.00</span>
                </div>
              </div>
  
              {/* Payment Method */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Payment Method</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Please send your payment directly to our bank account. Use your
                  Order ID as the payment reference.
                </p>
                <button className="w-60 bg-white text-black p-2 rounded  hover:bg-yellow-300">
                  Place Order
                </button>
              </div>
             </div>
          </div>
               {/* Features Section */}
      <div className="border-t bg-[#FAF3EA]">
        <div className="container mx-auto p-100 w-fixed[140px] h-fixed[270px] justify-space-between mt-12">
          <div className="grid grid-cols-4  gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/trophy 1.png" alt="Trophy" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">crafted from top materials</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/guarantee.png" alt="Warranty" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/shipping.png" alt="Shipping" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over $150</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 mb-4">
                <Image src="/customer-support.png" alt="Support" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>         
     
        </div>
    );
  }