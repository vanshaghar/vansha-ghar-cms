import { CollectionConfig } from "payload/types";

export const Popup: CollectionConfig = {
  slug: "popup",
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: "name"
  },
  labels: {
    singular: "Popup",
    plural: "Popups"
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "banner",
      label: "Banner",
      type: "relationship",
      relationTo: "media"
    },
    {
      name: "link",
      label: "Link",
      type: "text"
    },
    {
      name: "active",
      label: "Active",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar"
      }
    }
  ]
};
