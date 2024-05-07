import extractText from "./extractText";
import { CollectionBeforeChangeHook } from "payload/types";

export const addReadTime: CollectionBeforeChangeHook = ({ data }) => {
  const wordsPerMinute = 200;
  if (!data.content) return data;
  const words = extractText([...data.content.root.children]).split(" ").length;
  const minutes = Math.ceil(words / wordsPerMinute);
  data.readTime = minutes;
  return data;
};
