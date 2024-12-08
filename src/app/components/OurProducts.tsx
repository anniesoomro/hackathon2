const products = [
    {
      name: "Syltherine",
      price: 2500000,
      originalPrice: 3500000,
      image: "/product-1.png",
      tag: "-30%",
    },
    {
        image: "/product-2.png",
        
      },
    {
      name: "Lolito",
      price: 7000000,
      originalPrice: 14000.000,
      image: "/product-3.png",
      tag: "-50%",
    },
    {
        name: "Respira",
        price: 500.000,
        image: "/product-4.png",
        tag: "New",
      },
    {
        name: "Grifo",
        price: 1500.000,
        image: "/product-5.png",
        
    },
    {
        name: "Muggo",
        price: 150.000,
        image: "/product-6.png",
        tag: "New",
    },
    {
        name: "Pingky",
        price: 7000.000,
        originalPrice: 14000.000,
        image: "/product-7.png",
        tag: "-50%",
    },
    {
        name: "Potty",
        price: 500.000,
        image: "/product-8.png",
        tag: "New",
    },  
  ];
  
  export default function Products() {
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
                {product.tag && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                {product.originalPrice && (
                  <p className="text-gray-500 line-through">
                    Rp {Number(product.originalPrice).toLocaleString('id-ID')}
                  </p>
                )}
                <p className="text-xl font-bold">
                  Rp {Number(product.price).toLocaleString('id-ID')}
                </p>
                
              </div>
             </div>
          ))}
            </div>
            <div className="flex items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F] mt-4">Show More</button>
        </div>
      </div>
    );
 
}