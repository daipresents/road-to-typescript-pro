function map<T, U>(array: T[], callback: (x: T) => U): U[] {
  const mapResult: U[] = [];
  for (let target of array) {
    mapResult.push(callback(target));
  }
  return mapResult;

}

const input = [1, 1, 2, 3, 5, 8, 13];
const mapResult = map(input, (x) => x * 10);

// [10, 10, 20, 30, 50, 80, 130]
console.log(mapResult);

const input2 = [1, -3, -2, 8, 0, -1];
const mapResult2: boolean[] = map(input2, (x) => x >= 0);

// [true, false, false, true, true, false]
console.log(mapResult2);
