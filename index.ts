import { GildedRose, Item } from "./app/gilded-rose";

const gildedRose = new GildedRose([
    new Item('Aged Brie', 3, 25),
    new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10),
    new Item('Sulfuras, Hand of Ragnaros', 7, 40),
    new Item('Cooking Pan', 6, 34),
]);

let iterations = 50;

while(iterations) {
    gildedRose.updateQuality();
    iterations--;
}

console.log(gildedRose.items);
