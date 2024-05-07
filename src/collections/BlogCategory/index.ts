import { CollectionConfig } from "payload/types";

export const BlogCategory: CollectionConfig = {
  slug: "blogcategory",
  labels: {
    singular: "Blog Category",
    plural: "Blog Categories"
  },
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "value",
      label: "Value",
      type: "text",
      required: true
    },
    {
      name: "description",
      label: "Description",
      type: "textarea"
    }
  ]
};
