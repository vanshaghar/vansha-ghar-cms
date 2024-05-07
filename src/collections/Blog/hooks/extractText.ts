const extractText = (children) => {
  const text = children.map((child) => {
    if (child.children && child.children.length > 0) {
      return extractText(child.children ?? []);
    }
    return child.text || "";
  });
  return text.join(" ");
};

export default extractText;
