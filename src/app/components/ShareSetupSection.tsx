import Image from "next/image";
export default function FuniroCollage() {
    return (
      <section className="flex flex-col items-center bg-gray-50 py-10 px-4">
        {/* Header Text */}
        <div className="text-center mb-6">
          <p className="text-gray-700 text-lg font-medium">Share your setup with</p>
          <p className="text-black text-2xl font-bold">#FuniroFurniture</p>
        </div>
  
        {/* Images Grid */}
        <div className="grid grid-cols-4 gap-4 max-w-6xl">
          {/* Top Left - Tall Image */}
          <div className="col-span-1 row-span-2">
            <Image
              src="/image1.png"
              alt="Furniture 1"
              className="h-[382px] w-[180px] object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Top Left - Small Image */}
          <div className="col-span-1">
            <Image
              src="/image2.png"
              alt="Furniture 2"
              className="h-[150px] w-[180px] object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Center - Main Image */}
          <div className="col-span-1 row-span-2">
            <Image
              src="/image3.png"
              alt="Furniture 3"
              className="h-[392px] w-[250px] object-cover rounded-lg shadow mx-auto"
            />
          </div>
  
          {/* Right Middle - Small Image */}
          <div className="col-span-1">
            <Image
              src="/image4.png"
              alt="Furniture 4"
              className="h-[150px] w-[180px] object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Top Right - Tall Image */}
          <div className="col-span-1 row-span-2">
            <Image
              src="/image5.png"
              alt="Furniture 5"
              className="h-[382px] w-[180px] object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Bottom Row - Image 6 */}
          <div className="col-span-1">
            <Image
              src="/image6.png"
              alt="Furniture 6"
              className="h-[150px] w-full object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Bottom Row - Image 7 */}
          <div className="col-span-1">
            <Image
              src="/image7.png"
              alt="Furniture 7"
              className="h-[150px] w-full object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Bottom Row - Image 8 */}
          <div className="col-span-1">
            <Image
              src="/image8.png"
              alt="Furniture 8"
              className="h-[150px] w-full object-cover rounded-lg shadow"
            />
          </div>
  
          {/* Bottom Row - Image 9 */}
          <div className="col-span-1">
            <Image
              src="/image9.png"
              alt="Furniture 9"
              className="h-[150px] w-full object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    );
  }