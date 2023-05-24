// 배열을 이용한 스택
// class Stack {
//   constructor() {
//     this.array = [];
//   }

//   size() {
//     return this.array.length;
//   }

//   push(item) {
//     this.array.push(item);
//   }

//   pop() {
//     if (this.array.length === 0) {
//       throw new Error("Stack is empty");
//     }
//     return this.array.pop();
//   }

//   peek() {
//     if (this.array.length === 0) {
//       throw new Error("Stack is empty");
//     }
//     return this.array[this.size() - 1];
//   }
// }

class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    // 내 방식
    // this._size++;
    // this.head = item;

    // 엘리 방식
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    // 내 방식
    // this._size--;
    // return this.head;

    // 엘리 방식
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    return this.head.item;
  }
}

module.exports = Stack;
