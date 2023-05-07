import {defineStore} from "pinia";
import {ItemsStoreIdentifier, ItemsStore} from "./modules/items.store";

export default {
  useItemsStore: defineStore(ItemsStoreIdentifier, ItemsStore)
};