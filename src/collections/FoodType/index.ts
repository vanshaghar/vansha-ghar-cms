import { CollectionConfig } from "payload/types";

export const FoodType: CollectionConfig = {
  slug: "food-type",
  labels: {
    singular: "Food Type",
    plural: "Food Types"
  },
  admin: {
    useAsTitle: "type"
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
    {
      name: "type",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "value",
      label: "Value",
      type: "text",
      required: true
    }
  ]
};
