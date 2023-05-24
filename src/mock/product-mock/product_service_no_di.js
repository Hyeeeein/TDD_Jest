// 좋지 않은 버전

const ProductClient = require("./product_client");
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  // 비즈니스 로직(available한 품목) 이 포함
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
