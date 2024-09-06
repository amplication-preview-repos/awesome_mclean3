import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  botId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderNumber?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
