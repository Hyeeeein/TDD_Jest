const Calculator = require("../calculator.js");

// describe : test('add'), test('subtract') 등 관련된 함수들을 묶을 수 있음
describe("Calculator", () => {
  // beforeEach : 중복되는 코드는 바로 빼서 선언하는 것보다 각 테스트 코드가 독립적인 것이 중요하기 때문에 beforeEach 를 사용하여 각 테스트가 진행되기 이전에 실행해줄 것
  // 공식문서 : https://jestjs.io/docs/setup-teardown
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  // it : 자기 자신 지칭 즉, Calculator
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(9);
    cal.add(1);
    expect(cal.value).toBe(10);
  });

  // 에러를 예상하는 코드
  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(9);
    cal.multiply(5);
    expect(cal.value).toBe(45);
  });

  it("divide", () => {
    cal.set(9);
    cal.multiply(5);
    expect(cal.value).toBe(45);
  });

  // 나누기는 상황별로
  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 2 === 2", () => {
      cal.set(4);
      cal.divide(2);
      expect(cal.value).toBe(2);
    });
  });
});
