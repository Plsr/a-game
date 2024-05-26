export type Item = {
  name: string;
  amount: number;
};

export class Inventory {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}
