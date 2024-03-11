type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
}

const obj: Family<number, string> = {
  mother: 0,
  father: 0,
  child: "1000",
}

console.log(obj.mother);
console.log(obj.father);
console.log(obj.child);
