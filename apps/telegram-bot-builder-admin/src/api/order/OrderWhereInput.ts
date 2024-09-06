import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  bot?: BotWhereUniqueInput;
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  status?: "Option1";
  totalPrice?: FloatNullableFilter;
};
