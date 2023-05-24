// 제품을 배포할 때 사용하는 것이 아니라 테스트용으로만 사용할 것이기 때문에 test 폴더에 생성 => 배포 시 test 파일 제외하고 배포하면 됨

class StubProductClient {
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}

module.exports = StubProductClient;
