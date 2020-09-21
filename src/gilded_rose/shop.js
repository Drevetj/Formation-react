class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name == "Sulfuras") {
        return;
      }

      item.sellIn -= 1;
      this.qualityItem(item);
    });

    return this.items;
  }

  qualityItem(item) {
    if (['Aged Brie', 'Backstage'].includes(item.name)) {
      this.increaseQuality(item);
    } else {
      this.decreaseQuality(item);
    }
  }

  decreaseQuality(item) {
    if (item.sellIn > 0) {
      item.quality = Math.min(item.quality - 2, 0);
    } else {
      item.quality = Math.min(item.quality - 1, 0);
    }
  }

  increaseQuality(item) {
    if (item.sellIn < 11) {
      item.quality = Math.min(item.quality + 2, 50);
    }

    if (item.sellIn < 6) {
      item.quality = Math.min(item.quality + 3, 50);
    }

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}
