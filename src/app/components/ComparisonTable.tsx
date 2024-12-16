export default function ComparisonTable() {
    const comparisonData = [
      {
        category: "General",
        items: [
          { key: "Sales Package", value1: "1 Sectional Sofa", value2: "1 Three Seater, 2 Single Seater" },
          { key: "Model Number", value1: "TCRL89H5568", value2: "DRUFJ88L002" },
          { key: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
          { key: "Configuration", value1: "L Shaped", value2: "L Shaped" },
          { key: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
          { key: "Upholstery Color", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
        ],
      },
      {
        category: "Dimensions",
        items: [
          { key: "Width", value1: "265.62 cm", value2: "265.32 cm" },
          { key: "Height", value1: "78 cm", value2: "78 cm" },
          { key: "Depth", value1: "187.16 cm", value2: "187.16 cm" },
          { key: "Weight", value1: "45Kg", value2: "65Kg" },
          { key: "Seat Height", value1: "41.52 cm", value2: "41.52 cm" },
          { key: "Leg Height", value1: "5.46 cm", value2: "5.466 cm" },
        ],
      },
      {
        category: "Warranty",
        items: [
          { key: "Warranty Summary", value1: "1 Year Warranty", value2: "1 Year Warranty" },
          { key: "Covered in Warranty", value1: "Warranty Against Manufacturing Defect", value2: "Warranty of the Products is limited to Manufacturing defects only" },
          { key: "Not Covered in Warranty", value1: "Wear and Tear", value2: "Wear and Tear" },
        ],
      },
    ];
  
    return (
      <div className="overflow-x-auto">
        {comparisonData.map((section) => (
          <div key={section.category} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{section.category}</h2>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2 text-left">Feature</th>
                  <th className="border border-gray-200 p-2 text-left">Product 1</th>
                  <th className="border border-gray-200 p-2 text-left">Product 2</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 p-2">{item.key}</td>
                    <td className="border border-gray-200 p-2">{item.value1}</td>
                    <td className="border border-gray-200 p-2">{item.value2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="w-full bg-yellow-500 text-white p-2 rounded-md mt-4 hover:bg-yellow-900" >
            Add to Cart
          </button>
          </div>
          
        ))}
      </div>
    );
  }