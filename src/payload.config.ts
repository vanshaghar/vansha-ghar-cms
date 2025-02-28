import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import Users from "./collections/Users";
import { Media } from "./collections/Media";
import { Category } from "./collections/Category";
import { BlogCategory } from "./collections/BlogCategory";
import { FoodType } from "./collections/FoodType";
import { Menu } from "./collections/Menu";
import { OrganizedMenu } from "./collections/OrganizedMenu/OrganizedMenu";
import { Blogs } from "./collections/Blog";
import { Reviews } from "./collections/Reviews";
import { Featured } from "./collections/Featured";
import { Gallery } from "./collections/Gallery";
import { Popup } from "./collections/Popup";
import { MenuImage } from "./collections/MenuImage";
export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler()
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Media,
    Popup,
    FoodType,
    Category,
    Menu,
    OrganizedMenu,
    MenuImage,
    Featured,
    Gallery,
    BlogCategory,
    Blogs,
    Reviews
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts")
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql")
  },
  plugins: [
    payloadCloud(),
    cloudStorage({
      collections: {
        // Enable cloud storage for Media collection
        media: {
          // Create the S3 adapter
          adapter: s3Adapter({
            config: {
              region: process.env.S3_REGION,
              endpoint: process.env.S3_ENDPOINT,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
              }
            },
            bucket: process.env.S3_BUCKET
          })
        }
      }
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI
  })
});
