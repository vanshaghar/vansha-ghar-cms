import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "https://spydogenesis.s3.ap-south-1.amazonaws.com/vanshaghar",
    mimeTypes: ["image/*"]
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "alt",
      type: "text"
    }
  ]
};
