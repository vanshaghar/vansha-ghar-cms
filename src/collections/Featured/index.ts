import { CollectionConfig } from "payload/types";
import { afterChangeHook } from "../../lib/webhook";

export const Featured: CollectionConfig = {
  slug: "featured",
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
      name: "description",
      label: "Description",
      type: "textarea"
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media"
    }
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};
