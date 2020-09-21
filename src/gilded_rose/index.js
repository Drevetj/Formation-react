import { item } from './item.js';
import { shop } from './shop.js';

let item1 = new Item('Item1', 10, 10);
let item2 = new Item('Backstage', 10, 10);
let shop  = new Shop([item1, item2]);

export const result2 = shop.updateQuality;
