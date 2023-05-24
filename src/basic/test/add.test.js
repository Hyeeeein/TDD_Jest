const add = require("../add.js");

// test 함수의 첫번째 인수로 테스트 이름 기재, 두번째 인수로 콜백함수로 테스트할 코드를 작성, 세번째 인수는 선택 사항으로 얼마만큼 실행할 것인지 기재
test("add", () => {
  // 테스트 코드 작성
  // 코드를 수행했을 때 (expect) 결과값이 (toBe) 어떻게 될 것이다
  expect(add(1, 2)).toBe(3);
});