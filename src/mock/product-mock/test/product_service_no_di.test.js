// mock 을 남용하는 사례

const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// 유닛테스트 중 모듈이 서로 의존성이 있는 경우 하나의 함수를 테스트하기 위해서 의존하고 있는 모든 함수들을 mock 화
// 1. ProductClient 자체를 mock 화 => 실제로 구현된 ProductClient 를 사용하는 것이 아니라 mock 으로 만들어버림
jest.mock("../product_client");

describe("ProductService", () => {
  // 2. fetchItems 중에서 available 한 아이템을 찾아야 하니까 fetchItems 자체도 mock => 비동기적으로 리턴
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);

  // 3. ProductClient 를 mock 화한 것과 fetchItems 를 연결
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  // ProductService 내부에서 ProductClient 를 실행하고 있기 때문에 네트워크 상태에 의존하게 됨, 따라서 독립적으로 테스트를 실행하는 것이 중요!!!
  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1); // item 의 길이가 1
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });

  // 여러 테스트를 작성할 경우 fetchItems 가 실제로 다른 테스트에서 실행되었기 때문에 toHaveBeenCalledTimes 는 1이 아니지만 jest 설정 파일에서 clearMocks 가 true 이기 때문에 각 테스트가 실행되기 전 mock 이 한번 초기화되기 때문에 1이 성공한 것
  // 이때, clearMocks 를 fasle 로 설정했다면 beforeEach 에 mockClear() 를 작성 => 수동적 clear
  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
