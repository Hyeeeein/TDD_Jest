// class 내부에서 스스로 의존을 결정하고 정의하고 사용하는 것을 의존성 주입에 어긋남
// 따라서 외부로 부터 productClient 함수를 받아와서 사용

class ProductService {
  constructor(ProductClient) {
    this.productClient = ProductClient;
  }

  // 비즈니스 로직(available한 품목) 이 포함
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
