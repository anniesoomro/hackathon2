'use client'

import Image from "next/image";
import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", image: "/inner.png" },
  { id: 2, name: "Product 2", image: "/sideinner.png" },
  { id: 3, name: "Product 3", image: "/inner.png" },
  { id: 4, name: "Product 4", image: "/sideinner.png" },
];

export default function Slide() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showProducts, setShowProducts] = useState(false);

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <>
      <div className="slideSection bg-[#FCF8F3] container mx-auto flex">
        <div className="slideText pt-9">
          <h4 className="font-extrabold text-[2rem]">50+ Beautiful rooms inspiration</h4>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] p-2 text-white" onClick={toggleProducts}>
            {showProducts ? "Hide Products" : "Explore More"}
          </button>
        </div>
        {showProducts ? (
          <div className="slideImages flex items-center">
            <button onClick={prevProduct} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
            <div className="mx-4">
              <Image 
                src={products[currentProductIndex].image || "/placeholder.svg"} 
                width={250} 
                height={200} 
                alt={products[currentProductIndex].name} 
              />
              <p className="text-center mt-2">{products[currentProductIndex].name}</p>
            </div>
            <button onClick={nextProduct} className="px-2 py-1 bg-gray-200 rounded">Next</button>
          </div>
        ) : (
          <>
            <div className="slideImages">
              <Image src="/inner.png" width={250} height={200} alt="Picture of the author" />
            </div>
            <div className="slideImages">
              <Image src="/sideinner.png" width={250} height={200} alt="Picture of the author" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

