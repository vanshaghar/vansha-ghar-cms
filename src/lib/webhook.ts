import { CollectionAfterChangeHook } from "payload/types";

export const afterChangeHook: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation // name of the operation ie. 'create', 'update'
}) => {
  await fetch("https://api.vercel.com/v1/integrations/deploy/prj_MShQxGAeEeQgN9zUTJFNjitCyf5n/Gjl3qNEvcc");
  return doc;
};
