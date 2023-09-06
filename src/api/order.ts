type OrderType = "Dessert" | "Plate" | "Drink";

type Order = {
  orderType: OrderType;
  description: string;
  time: number;
  name: string;
};

export default Order;
