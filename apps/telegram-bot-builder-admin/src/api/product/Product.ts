import { Bot } from "../bot/Bot";
import { Order } from "../order/Order";

export type Product = {
  bot?: Bot | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
