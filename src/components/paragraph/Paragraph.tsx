import { createElement } from "react";
import IParagraphProps from "./Paragraph.type";
import { getStyle, getHtmlElement } from "./Paragraph.util";

const Paragraph = ({ children, type, color }: IParagraphProps) => {
  const htmlElement = getHtmlElement(type);
  const style = getStyle(type);

  return createElement(htmlElement, { style: { color, ...style } }, children);
};

export default Paragraph;
