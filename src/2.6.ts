let result = '';
for(let i = 1; i <= 100; i++) {
  if(i % 3 !== 0 && i % 5 !== 0) {
    // 3の倍数でなく、5の倍数でもないときは整数をそのまま出力する
    result += i;
    console.log(i);
  } else if (i % 3 === 0 && i % 5 !== 0) {
    // 3の倍数であり、5の倍数でないときは整数の代わりにFizzを出力する
    result += 'Fizz';
    console.log('Fizz');
  } else if (i % 3 !== 0 && i % 5 === 0) {
    // 3の倍数でなく、5の倍数であるときは整数の代わりにBuzzを出力する
    result += 'Buzz';
    console.log('Buzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    // 3の倍数であり、5の倍数でもあるときは整数の代わりにFizzBuzzを出力する
    result += 'Fizz';
    console.log('FizzBuzz');
  }

  result += ' ';
}

console.log(result);
