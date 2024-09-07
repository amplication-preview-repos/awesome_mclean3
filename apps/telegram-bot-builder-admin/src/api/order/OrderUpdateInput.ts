import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  bot?: BotWhereUniqueInput | null;
  orderNumber?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};
