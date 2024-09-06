import { Bot } from "../bot/Bot";
import { Product } from "../product/Product";

export type Order = {
  bot?: Bot | null;
  createdAt: Date;
  id: string;
  orderNumber: string | null;
  product?: Product | null;
  quantity: number | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
