import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from "chai";

// Add a master test here
describe('Gilded Rose Master Test', function () {

    const items = [
        {name: 'Aged Brie', sellIn: 3, quality: 25}, // aged brie
        {name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 12, quality: 10}, // backstage passes
        {name: 'Sulfuras, Hand of Ragnaros', sellIn: 7, quality: 40}, // sulfuras
        {name: 'Cooking Pan', sellIn: 6, quality: 34}, // other
    ];

    it('should have the correct sellIn value after one day', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );
        const itemsAfter = gildedRose.updateQuality();

        expect(itemsAfter[0].sellIn).to.equal(2);
        expect(itemsAfter[1].sellIn).to.equal(11);
        expect(itemsAfter[2].sellIn).to.equal(7);
        expect(itemsAfter[3].sellIn).to.equal(5);

    });

    it('should have the correct quality value after one day', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );
        const itemsAfter = gildedRose.updateQuality();

        expect(itemsAfter[0].quality).to.equal(26);
        expect(itemsAfter[1].quality).to.equal(11);
        expect(itemsAfter[2].quality).to.equal(40);
        expect(itemsAfter[3].quality).to.equal(33);

    });

    it('should have the correct sellIn value after 3 days', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );

        let iterations = 3;

        while(iterations) {
            gildedRose.updateQuality();
            iterations--;
        }

        const itemsAfter = gildedRose.items;

        expect(itemsAfter[0].sellIn).to.equal(0);
        expect(itemsAfter[1].sellIn).to.equal(9);
        expect(itemsAfter[2].sellIn).to.equal(7);
        expect(itemsAfter[3].sellIn).to.equal(3);

    });

    it('should have the correct quality value after 3 days', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );

        let iterations = 3;

        while(iterations) {
            gildedRose.updateQuality();
            iterations--;
        }

        const itemsAfter = gildedRose.items;

        expect(itemsAfter[0].quality).to.equal(28);
        expect(itemsAfter[1].quality).to.equal(14);
        expect(itemsAfter[2].quality).to.equal(40);
        expect(itemsAfter[3].quality).to.equal(31);

    });

    it('should have the correct sellIn value after 10 days', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );

        let iterations = 10;

        while(iterations) {
            gildedRose.updateQuality();
            iterations--;
        }

        const itemsAfter = gildedRose.items;

        expect(itemsAfter[0].sellIn).to.equal(-7);
        expect(itemsAfter[1].sellIn).to.equal(2);
        expect(itemsAfter[2].sellIn).to.equal(7);
        expect(itemsAfter[3].sellIn).to.equal(-4);

    });

    it('should have the correct quality value after 10 days', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );

        let iterations = 10;

        while(iterations) {
            gildedRose.updateQuality();
            iterations--;
        }

        const itemsAfter = gildedRose.items;

        expect(itemsAfter[0].quality).to.equal(42);
        expect(itemsAfter[1].quality).to.equal(31);
        expect(itemsAfter[2].quality).to.equal(40);
        expect(itemsAfter[3].quality).to.equal(20);

    });

    it('should have the correct sellIn value after 50 days', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );

        let iterations = 50;

        while(iterations) {
            gildedRose.updateQuality();
            iterations--;
        }

        const itemsAfter = gildedRose.items;

        expect(itemsAfter[0].sellIn).to.equal(-47);
        expect(itemsAfter[1].sellIn).to.equal(-38);
        expect(itemsAfter[2].sellIn).to.equal(7);
        expect(itemsAfter[3].sellIn).to.equal(-44);

    });

    it('should have the correct quality value after 50 days', function() {

        const gildedRose = new GildedRose(
            items.map(item => new Item(item.name, item.sellIn, item.quality))
        );

        let iterations = 50;

        while(iterations) {
            gildedRose.updateQuality();
            iterations--;
        }

        const itemsAfter = gildedRose.items;

        expect(itemsAfter[0].quality).to.equal(50);
        expect(itemsAfter[1].quality).to.equal(0);
        expect(itemsAfter[2].quality).to.equal(40);
        expect(itemsAfter[3].quality).to.equal(0);

    });

});