type Option2<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
}

function showNumber2(obj: Option2<number>): void {
  if(isSome(obj)) {
    console.log(obj.value);
  } else {
    console.log(obj.tag);
  }
}

function isSome<T>(obj: Option2<T>): obj is { tag: "some"; value: T} {
  return obj.tag === "some";
}

showNumber2({tag: "some", value: 123});
showNumber2({tag: "none"});
