const fetchProduct = require("../async.js");

// 참고 : Testing Asynchronous Code https://jestjs.io/docs/asynchronous

describe("Async", () => {
  // 해당 코드의 toEqual 로 다른 값을 주면 테스트도 에러가 나야하는데 테스트는 통과했다고 나오고 promise 내부에서만 에러가 남 => promise 결과가 나오기도 전에 it 이 끝났기 때문에 통과가 된 것, 따라서 수동적으로 끝나는 시점을 명시해줄 것
  // return 은 즉각적으로 결과가 나오는 반면, done 의 경우 테스트 수행이 느려짐 => return 방식을 쓸 것
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  // resolves api
  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  // rejects api
  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
