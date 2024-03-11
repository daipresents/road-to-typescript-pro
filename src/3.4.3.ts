type HasName = {
  name: string;
};

type FamilyHasName<Parent extends HasName, Child extends Parent> = {
  mother: Parent,
  father: Parent,
  child: Child,
}

// 型 'number' は制約 'HasName' を満たしていません。ts(2344)
// type T = FamilyHasName<number, string>;

type Animal = {
  name: string;
};

type Human = {
  name: string;
  age: number;
}

type S = FamilyHasName<Animal, Human>;

// 型 'Animal' は制約 'Human' を満たしていません。
//  プロパティ 'age' は型 'Animal' にありませんが、型 'Human' では必須です。
// type T = FamilyHasName<Human, Animal>;
