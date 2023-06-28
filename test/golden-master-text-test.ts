import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from "chai";

// Add a master test here
describe('Gilded Rose Master Test', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([
            new Item('foo', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
            new Item('', 0, 0),
        ]);

        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });

});