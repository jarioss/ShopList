import { Injectable } from '@angular/core';
import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [{
    id: 0,
    title: 'Manzana',
    price: 10.5,
    quantity: 4,
    completed: false
  },
  {
    id: 1,
    title: 'Pan',
    price: 3.5,
    quantity: 8,
    completed: true
  },
  {
    id: 2,
    title: 'Chaqueta',
    price: 300,
    quantity: 1,
    completed: false
  }];

  constructor() { }

  getItem() {
    return this.items;
  }
  addItem(item: Item) {
    this.items.unshift(item);
  }
}
