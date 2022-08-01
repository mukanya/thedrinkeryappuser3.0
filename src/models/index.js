// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "IN_PREPARATION": "IN_PREPARATION",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Basket, BasketProduct, Product, OrderProduct, Order, Store, User } = initSchema(schema);

export {
  Basket,
  BasketProduct,
  Product,
  OrderProduct,
  Order,
  Store,
  User,
  OrderStatus
};