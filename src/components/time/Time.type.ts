export enum TimeIconEnum {
  Dessert = "Dessert",
  Plate = "Plate",
  Drink = "Drink",
}

export type TimeIcon = keyof typeof TimeIconEnum;

type ITimeProps = {
  icon: TimeIcon;
  seconds: number;
  isTitle?: boolean;
};

export default ITimeProps;
