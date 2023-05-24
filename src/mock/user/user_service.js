class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedin = false;
  }

  login(id, password) {
    if (!this.isLogedin) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogedin = true));
    }
  }
}

module.exports = UserService;

// client 를 따로 만드는 이유!
// 만약 UserService 에서 cient 를 사용하는 것이 아니라 내부적으로 fetch 를 하게 되면 UserService 는 네트워크에 의존하고 있기 때문에 단위 테스트를 하기 어려워 지기 때문에
