import { CollectionConfig } from "payload/types";
import { useForm } from "payload/components/forms";
import { afterChangeHook } from "../../lib/webhook";

export const OrganizedMenu: CollectionConfig = {
  slug: "organized-menu",
  access: {
    read: () => true
  },
  labels: {
    singular: "Organized Menu",
    plural: "Organized Menus"
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
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "category",
      required: true
    },
    {
      type: "array",
      name: "menus",
      label: "Menus",
      fields: [
        {
          type: "relationship",
          name: "menu",
          label: "Menu",
          relationTo: "menu",
          required: true
        },
        {
          type: "number",
          name: "index",
          label: "Index",
          required: true
        }
      ]
    }
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};
