import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type BotWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  owner?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
