export enum ParagraphTypeEnum {
  h1 = "h1",
  h2 = "h2",
  p = "p",
  caption = "caption",
}

export type ParagraphType = keyof typeof ParagraphTypeEnum;

type IParagraphProps = {
  children: string | string[];
  type: ParagraphType;
  color?: string;
};

export default IParagraphProps;
