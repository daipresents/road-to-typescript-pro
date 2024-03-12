for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

function sequence(start: number, end: number): number[] {
  const result: number[] = [];
  for(let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function getFizzBuzzString(target: number): string {
  if (target % 3 === 0 && target % 5 === 0) {
    // 3の倍数であり、5の倍数でもあるときは整数の代わりにFizzBuzzを出力する
    return 'FizzBuzz';
  } else if (target % 3 === 0) {
    // 3の倍数であるときは整数の代わりにFizzを出力する
    return 'Fizz';
  } else if (target % 5 === 0) {
    // 5の倍数であるときは整数の代わりにBuzzを出力する
    return 'Buzz';
  } else {
    // 3の倍数でなく、5の倍数でもないときは整数をそのまま出力する
    return String(target);
  }

}
