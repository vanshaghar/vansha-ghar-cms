import { CollectionConfig } from "payload/types";
import { APIError, FileUploadError } from "payload/errors";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "https://vanshaghar.s3.me-central-1.amazonaws.com/payload",
    mimeTypes: ["image/*"]
  },
  access: {
    read: () => true
  },

  fields: [
    {
      name: "alt",
      type: "text",
      admin: {
        description: "Max image size 500kb"
      }
    }
  ],
  hooks: {
    // beforeValidate: [
    //   (req) => {
    //     const image = req.data;
    //     // Make sure uploaded image is big enough
    //     if (image && image.filesize && image.filesize > 500000) {
    //       throw new FileUploadError();
    //     }
    //     return req;
    //   }
    // ]
  }
};
