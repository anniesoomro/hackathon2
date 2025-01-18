import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative h-[240px] bg-[url('/bg-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4">
          <div className="relative flex h-[240px] flex-col items-center justify-center text-white">
            <h1 className="text-4xl text-black font-bold">Blog</h1>
            <div className="mt-2 flex items-center space-x-2">
              <Link href="/" className="text-sm text-black hover:underline">
                Home
              </Link>
              <span>→</span>
              <span className="text-sm text-black">Blog</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6">
        {/* Blog Posts */}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/blog1.png"
              alt="Blog Post 1"
              width={280} // Width set to 280px
              height={200} // Height set to 200px
              className="object-cover rounded-md mb-4"
            />
            <div className="text-sm text-gray-500 mb-2">
              <span>Admin</span> | <span>14 Oct 2022</span> | <span>Wood</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Going all-in with millennial design</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
            </p>
            <a href="#" className="text-blue-500 font-medium">Read more</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/blog2.png"
              alt="Blog Post 1"
              width={280} // Width set to 280px
              height={200} // Height set to 200px
              className="object-cover rounded-md mb-4"
            />
            <div className="text-sm text-gray-500 mb-2">
              <span>Admin</span> | <span>14 Oct 2022</span> | <span>Wood</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Exploring new ways of decorating</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
            </p>
            <a href="#" className="text-blue-500 font-medium">Read more</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/blog3.png"
              alt="Blog Post 2"
              width={280} // Width set to 280px
              height={200} // Height set to 200px
              className="object-cover rounded-md mb-4"
            />
            <div className="text-sm text-gray-500 mb-2">
              <span>Admin</span> | <span>14 Oct 2022</span> | <span>Handmade</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Handmade pieces that took time to make</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
            </p>
            <a href="#" className="text-blue-500 font-medium">Read more</a>
          </div>
        </div>

        {/* Right Section */}
        <div className='ml-12'>
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <i className="fas fa-search absolute top-3 right-5 text-gray-400"></i>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Crafts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Handmade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Interior</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Wood</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Image src='/recentpost1.png' alt='recentpost'
                width={40} // Width set to 40px
                height={40} // Height set to 40px
                className="bg-gray-200 rounded-md" />
                <p className="ml-4 text-sm text-black">Going all-in with millennial design</p>
              </li>
              <li className="flex items-center">
                <Image src='/recentpost2.png' alt='recentpost'
                width={40} // Width set to 40px
                height={40} // Height set to 40px
                className="bg-gray-200 rounded-md" />
                <p className="ml-4 text-sm text-black">Exploring new ways of decorating</p>
              </li>
              <li className="flex items-center">
                <Image src='/recentpost3.png' alt='recentpost'
                width={40} // Width set to 40px
                height={40} // Height set to 40px
                className="bg-gray-200 rounded-md" />
                <p className="ml-4 text-sm text-black">Handmade pieces that took time to make</p>
              </li>
              <li className="flex items-center">
                <Image src='/recentpost4.png' alt='recentpost'
                width={40} // Width set to 40px
                height={40} // Height set to 40px
                className="bg-gray-200 rounded-md" />
                <p className="ml-4 text-sm text-black">Modern home in Milan</p>
              </li>
              <li className="flex items-center">
                <Image src='/recentpost5.png' alt='recentpost'
                width={40} // Width set to 40px
                height={40} // Height set to 40px
                className="bg-gray-200 rounded-md" />
                <p className="ml-4 text-sm text-black">Colorful office redesign</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button className="px-4 py-2 bg-yellow-400 text-white rounded-md">1</button>
        <button className="px-4 py-2 bg-gray-300 rounded-md">2</button>
        <button className="px-4 py-2 bg-gray-300 rounded-md">3</button>
        <button className="px-4 py-2 bg-gray-300 rounded-md">Next</button>
      </div>

      {/* Features Section */}
      <div className="border-t bg-[#FAF3EA]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-4 gap-8">
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
