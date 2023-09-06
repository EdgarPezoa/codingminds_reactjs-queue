import IconDessert from "../icons/IconDessert";
import IconDrink from "../icons/IconDrink";
import IconPlate from "../icons/IconPlate";
import { TimeIcon, TimeIconEnum } from "./Time.type";

export const getIcon = (icon: TimeIcon) => {
  switch (icon) {
    case TimeIconEnum.Dessert:
      return IconDessert;
    case TimeIconEnum.Drink:
      return IconDrink;
    case TimeIconEnum.Plate:
    default:
      return IconPlate;
  }
};
