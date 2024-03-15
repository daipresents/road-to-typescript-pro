type Option<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
}

function showNumber(obj: Option<number>): void {
  if(obj.tag === "some") {
    console.log(obj.value);
  } else {
    console.log(obj.tag);
  }
}

showNumber({tag: "some", value: 123});
showNumber({tag: "none"});
// オブジェクト リテラルは既知のプロパティのみ指定できます。'value' は型 '{ tag: "none"; }' に存在しません。
//showNumber({tag: "none", value: 123);
