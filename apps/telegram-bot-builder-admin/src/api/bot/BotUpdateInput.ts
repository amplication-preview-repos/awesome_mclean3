import { OrderUpdateManyWithoutBotsInput } from "./OrderUpdateManyWithoutBotsInput";
import { ProductUpdateManyWithoutBotsInput } from "./ProductUpdateManyWithoutBotsInput";

export type BotUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutBotsInput;
  owner?: string | null;
  products?: ProductUpdateManyWithoutBotsInput;
};
