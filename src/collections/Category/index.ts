import { CollectionConfig } from "payload/types";

export const Category: CollectionConfig = {
  slug: "category",
  labels: {
    singular: "Category",
    plural: "Categories"
  },
  admin: {
    useAsTitle: "name"
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
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
    },
    {
      name: "parent",
      label: "Parent Category",
      type: "relationship",
      relationTo: "category"
    }
  ]
};
