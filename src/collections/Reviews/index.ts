import { CollectionConfig } from "payload/types";
import { afterChangeHook } from "../../lib/webhook";

const Reviews: CollectionConfig = {
  slug: "reviews",
  labels: {
    singular: "Review",
    plural: "Reviews"
  },
  access: {
    read: () => true
  },
  versions: {
    drafts: true
  },
  admin: {
    useAsTitle: "title"
  },
  fields: [
    {
      name: "featured",
      label: "Featured Review",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Featured reviews will be displayed on the homepage"
      }
    },
    {
      type: "row",
      fields: [
        {
          name: "avatarUrl",
          type: "text",
          label: "Avatar URL"
        },
        {
          name: "url",
          type: "text",
          label: "Url"
        }
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Name",
          required: true,
          admin: {
            width: "50%"
          }
        },
        {
          name: "rating",
          type: "number",
          label: "Rating",
          required: true,
          min: 0,
          max: 5,
          admin: {
            width: "50%"
          }
        }
      ]
    },

    {
      type: "row",
      fields: [
        {
          name: "platform",
          type: "select",
          label: "Platform",
          required: true,
          defaultValue: "google",
          options: [
            {
              label: "Google",
              value: "google"
            },
            {
              label: "Zomato",
              value: "zomato"
            }
          ],
          admin: {
            width: "50%"
          }
        },
        {
          name: "date",
          type: "date",
          label: "Date",
          required: true,
          admin: {
            width: "50%"
          }
        }
      ]
    },
    {
      name: "review",
      type: "textarea",
      label: "Review",
      required: true
    }
  ],
  hooks: {
    afterChange: [afterChangeHook]
  }
};

export { Reviews };
