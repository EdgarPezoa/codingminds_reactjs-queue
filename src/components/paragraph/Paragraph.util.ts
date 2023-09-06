import colors from "../../utils/colors";
import { ParagraphType, ParagraphTypeEnum } from "./Paragraph.type";

export const getHtmlElement = (type: ParagraphType): "h1" | "h2" | "p" => {
  switch (type) {
    case ParagraphTypeEnum.h1:
      return "h1";
    case ParagraphTypeEnum.h2:
      return "h2";
    case ParagraphTypeEnum.p:
    case ParagraphTypeEnum.caption:
    default:
      return "p";
  }
};

export const getStyle = (type: ParagraphType): React.CSSProperties => {
  switch (type) {
    case ParagraphTypeEnum.h1:
    case ParagraphTypeEnum.h2:
      return { color: colors.primary[500] };
    case ParagraphTypeEnum.caption:
      return { color: colors.tertiary, margin: 0, fontSize: "0.8rem" };
    case ParagraphTypeEnum.p:
    default:
      return {};
  }
};
