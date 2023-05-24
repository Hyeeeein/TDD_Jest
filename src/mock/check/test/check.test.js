const check = require("../check");

// mock 함수를 이용하여 실제로 함수를 구현하지 않아도, 간편하게 이 함수가 호출되었는지 or 몇번 호출되었는지 or 어떤 인자값을 통해 호출되었는지 확인해볼 수 있음

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  // predicate = true
  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // 주석은 수동적인 확인 방법
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  // predicate = false
  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
