const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));

function createUser(name: string, age: number) {
  return (message: string): string => {
    return `${name} (${age}) 「${message}」`
  }
}
