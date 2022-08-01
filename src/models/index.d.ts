import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  IN_PREPARATION = "IN_PREPARATION",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED"
}



type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoreMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Basket {
  readonly id: string;
  readonly BasketProducts?: (BasketProduct | null)[] | null;
  readonly userID: string;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class BasketProduct {
  readonly id: string;
  readonly quantity: number;
  readonly Product?: Product | null;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketProductProductId?: string | null;
  constructor(init: ModelInit<BasketProduct, BasketProductMetaData>);
  static copyOf(source: BasketProduct, mutator: (draft: MutableModel<BasketProduct, BasketProductMetaData>) => MutableModel<BasketProduct, BasketProductMetaData> | void): BasketProduct;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly unitType?: string | null;
  readonly unitVol?: number | null;
  readonly price: number;
  readonly storeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class OrderProduct {
  readonly id: string;
  readonly quantity: number;
  readonly Product?: Product | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductProductId?: string | null;
  constructor(init: ModelInit<OrderProduct, OrderProductMetaData>);
  static copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct, OrderProductMetaData>) => MutableModel<OrderProduct, OrderProductMetaData> | void): OrderProduct;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly Store?: Store | null;
  readonly float: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderProducts?: (OrderProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderStoreId?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Store {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Products?: (Product | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Store, StoreMetaData>);
  static copyOf(source: Store, mutator: (draft: MutableModel<Store, StoreMetaData>) => MutableModel<Store, StoreMetaData> | void): Store;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}