import { CollectionConfig } from "payload/types";
import { afterChangeHook } from "../../lib/webhook";

export const FoodType: CollectionConfig = {
  slug: "food-type",
  access: {
    read: () => true,
    
  },
  labels: {
    singular: "Food Type",
    plural: "Food Types"
  },
  admin: {
    useAsTitle: "type"
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
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};
