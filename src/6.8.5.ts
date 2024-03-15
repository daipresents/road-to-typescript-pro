type Option3<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
}

function doubleOption(obj: Option3<number>) {
  return mapOption(obj, x => x * 2);
}

function mapOption<T, U>(obj: Option3<T>, callback: (value: T) => U) {
  switch(obj.tag){
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}

const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

console.log(doubleOption(four));
console.log(doubleOption(nothing));
