import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  bot?: BotWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  stock?: number | null;
};
