import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should update aged brie', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 20) ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(21);
    });

    it('should not change sulfuras', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 5, 20) ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(5);
        expect(items[0].quality).to.equal(20);
    });

    it('should increase by 3 Backstage passes', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(23);
    });

    it('should update normal items', function() {
        const gildedRose = new GildedRose([ new Item('Normal object', 5, 20) ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Normal object');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(19);
    });

    it('should double decrease conjured items', function() {
        const gildedRose = new GildedRose([ new Item('Conjured', 5, 20) ]);

        const items = gildedRose.updateQuality();

        expect(items[0].name).to.equal('Conjured');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(18);
    });

});
