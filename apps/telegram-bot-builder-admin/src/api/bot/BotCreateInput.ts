import { OrderCreateNestedManyWithoutBotsInput } from "./OrderCreateNestedManyWithoutBotsInput";
import { ProductCreateNestedManyWithoutBotsInput } from "./ProductCreateNestedManyWithoutBotsInput";

export type BotCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutBotsInput;
  owner?: string | null;
  products?: ProductCreateNestedManyWithoutBotsInput;
};
