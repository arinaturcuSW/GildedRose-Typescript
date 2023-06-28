export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach((item: Item) => {
            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                return;
            }

            item.sellIn--;

            switch (item.name) {
                case 'Aged Brie':
                    this.handleAgedBrieQuality(item);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    this.handleBackstagePassQuality(item);
                    break;
                case 'Conjured':
                    this.handleConjuredQuality(item);
                    break;
                default:
                    this.handleNormalItemQuality(item);
            }
        })

        return this.items;
    }

    modifyQualityBy(item: Item, num: number){
        item.quality += num;
        if (item.quality > 50) item.quality = 50;
        if (item.quality < 0) item.quality = 0;
    }

    handleConjuredQuality(item) {
        this.modifyQualityBy(item, -2);
    }

    handleAgedBrieQuality(item) {
        item.sellIn < 0 ? this.modifyQualityBy(item, 2) : this.modifyQualityBy(item, 1);
    }

    handleBackstagePassQuality(item) {
        if (item.sellIn <= 0 && item.quality > 0) {
            item.quality = 0;
            return;
        }

        item.sellIn < 5 ?
            this.modifyQualityBy(item, 3) :
            item.sellIn < 10 ?
                this.modifyQualityBy(item, 2) :
                this.modifyQualityBy(item, 1);
    }

    handleNormalItemQuality(item) {
        item.sellIn < 0 ? this.modifyQualityBy(item, -2) : this.modifyQualityBy(item, -1);
    }
}
