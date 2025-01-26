import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productImage",
      type: "image",
      title: "Product Image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    }),
    defineField({
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    }),
    // Removed the "reviews" field since reviews are stored in local storage
  ],
});