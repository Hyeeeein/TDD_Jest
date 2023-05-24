const ProductService = require("../product_service.js");
const StubProductClient = require("./stub_product_client.js");

jest.mock("../product_client");

describe("ProductService - stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1); // item 의 길이가 1
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});
