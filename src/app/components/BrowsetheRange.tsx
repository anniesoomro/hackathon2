import Image from "next/image";

export default function BrowseRange() {
  return (
    <section className="py-10 bg-gray-100 text-center">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Browse The Range</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {/* Item 1 */}
        <div className="group">
          <Image
            src="/dining.png"
            alt="Dining"
            width={300} // Set width
            height={200} // Set height
            className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
          />
          <p className="mt-2 text-gray-700 font-medium">Dining</p>
        </div>

        {/* Item 2 */}
        <div className="group">
          <Image
            src="/living.png"
            alt="Living"
            width={300} // Set width
            height={200} // Set height
            className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
          />
          <p className="mt-2 text-gray-700 font-medium">Living</p>
        </div>

        {/* Item 3 */}
        <div className="group">
          <Image
            src="/bedroom.png"
            alt="Bedroom"
            width={300} // Set width
            height={200} // Set height
            className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
          />
          <p className="mt-2 text-gray-700 font-medium">Bedroom</p>
        </div>
      </div>
    </section>
  );
}
