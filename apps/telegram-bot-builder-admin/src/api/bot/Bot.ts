import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type Bot = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  owner: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
