import { CollectionConfig } from "payload/types";
import { afterChangeHook } from "../../lib/webhook";

export const Category: CollectionConfig = {
  slug: "category",
  labels: {
    singular: "Category",
    plural: "Categories"
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
    },
    {
      name: "parent",
      label: "Parent Category",
      type: "relationship",
      relationTo: "category"
    },
    {
      name: "index",
      label: "Index",
      type: "number",
      required: true,
      unique: true
    }
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};
