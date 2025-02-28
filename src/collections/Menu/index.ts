import { CollectionConfig } from "payload/types";
import { afterChangeHook } from "../../lib/webhook";

export const Menu: CollectionConfig = {
  slug: "menu",
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: "name"
  },
  labels: {
    singular: "Menu",
    plural: "Menus"
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "description",
      label: "Description",
      type: "textarea"
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "category",
      admin: {
        position: "sidebar"
      }
    },
    {
      name: "price",
      label: "Price",
      type: "number"
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media"
    },
    {
      name: "foodType",
      label: "Food Type",
      type: "relationship",
      relationTo: "food-type",
      hasMany: true
    },
    {
      name: "ingredients",
      type: "textarea",
      label: "Ingredients"
    }
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};
