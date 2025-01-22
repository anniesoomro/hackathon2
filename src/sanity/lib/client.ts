// src/sanity/lib/client.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Use environment variable
  apiVersion: "2021-03-25",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});