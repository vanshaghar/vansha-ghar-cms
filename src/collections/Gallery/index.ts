import { CollectionConfig } from "payload/types";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: "name"
  },
  labels: {
    singular: "Gallery",
    plural: "Galleries"
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "images",
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
  ]
};
