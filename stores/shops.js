import shops from "../shops.json";

export function createStore() {
  return {
    shops: shops.shops,
    searchShops(value) {
      return this.shops.filter((shop) => shop.name.includes(value));
    },
    filterShopsByProject(value) {
      return this.shops.filter((shop) =>
        value.every((project) => shop.joinedProject.includes(project))
      );
    },
    addShop(newShop) {
      this.shops = [newShop, ...this.shops];
    },
    removeShop(index) {
      this.shops.splice(index, 1);
    },
  };
}
