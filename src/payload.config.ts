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
import { FoodType } from "./collections/FoodType";
import { Menu } from "./collections/Menu";
import { OrganizedMenu } from "./collections/OrganizedMenu/OrganizedMenu";
export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler()
  },
  editor: slateEditor({}),
  collections: [Users, Media, FoodType, Category, Menu, OrganizedMenu],
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
