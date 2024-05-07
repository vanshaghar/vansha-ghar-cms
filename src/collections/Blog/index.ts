import { CollectionConfig } from "payload/types";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
import { addReadTime } from "./hooks/addReadTime";

const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title"
  },
  versions: {
    drafts: true,
    maxPerDoc: 5
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "featuredPost",
      label: "Featured Post",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Featured posts will be displayed on the homepage"
      }
    },
    {
      name: "readTime",
      label: "Read Time",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Read time will be calculated automatically",
        readOnly: true
      }
    },
    {
      name: "authors",
      admin: {
        position: "sidebar"
      },
      hasMany: true,
      relationTo: "users",
      required: true,
      type: "relationship"
    },

    {
      name: "populatedAuthors",
      type: "array",
      access: {
        update: () => false
      },
      admin: {
        disabled: true,
        readOnly: true
      },
      fields: [
        {
          name: "id",
          type: "text"
        },
        {
          name: "name",
          type: "text"
        }
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
          localized: true
        },
        {
          name: "slug",
          label: "Slug",
          type: "text",
          unique: true,
          required: true
        }
      ]
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
      admin: {
        position: "sidebar",
        description: "Keywords for this post"
      }
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media"
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "textarea",
      required: true,
      localized: true
    },
    {
      name: "blogcategory",
      label: "Blog Category",
      type: "relationship",
      relationTo: "blogcategory",
      required: true,
      admin: {
        width: "50%"
      }
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      localized: true,
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})]
      }),
      admin: {
        style: {
          minHeight: "500px",
          border: "1px solid gray",
          padding: "2rem",
          fontFamily: "sans-serif"
        }
      }
    },
    lexicalHTML("content", { name: "content_html" })
  ],
  hooks: {
    afterRead: [],
    beforeChange: [addReadTime]
  }
};

export { Blogs };
