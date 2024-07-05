import { CollectionConfig } from "payload/types";
import { afterChangeHook } from "../../lib/webhook";

export const MenuImage: CollectionConfig = {
  slug: "menu-image",
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: "name"
  },
  labels: {
    singular: "MenuImage",
    plural: "MenuImages"
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "menuitems",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "relationship",
          relationTo: "media"
        }
      ]
    }
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};
