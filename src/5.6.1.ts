class TestUser {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === '') {
      throw new Error('名前は空にできません！');
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const testUser = new TestUser("uhyo", 26);
console.log(testUser.getMessage("こんにちは"));

const uhyo2 = new TestUser("", 100);
