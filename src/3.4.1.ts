type Child = {
  name: string;
}

const t: Child = {
  name: "musume",
}

type User<Child> = {
  name: string;
  child: Child;
}

const user: User<Child> = {
  name: "dai",
  child: t,
}

console.log(user.name);
console.log(user.child.name);
