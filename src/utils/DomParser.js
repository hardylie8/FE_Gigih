export const domParser = (htmlString, selector, attribute) => {
  if (htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const iframeSrc = doc.querySelector(selector).getAttribute(attribute);
    return iframeSrc;
  }
  return;
};
