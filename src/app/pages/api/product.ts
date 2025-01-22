// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client"; // Sanity client

export default async function handler(
  req: NextApiRequest, // Define request type
  res: NextApiResponse // Define response type
) {
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
    res.status(200).json(data); // Send data as JSON response
  } catch (error: unknown) { // Define error type as `unknown`
    console.error("Error fetching products:", error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message }); // Send error message
    } else {
      res.status(500).json({ message: "Something went wrong" }); // Generic error message
    }
  }
}