import shops from "../shops.json";

export function createStore() {
  // note the use of this which refers to observable instance of the store
  return {
    shops: shops.shops,
    get allShops() {
      return this.shops;
    },
  };
}
