type Animal2 = {
  name: string;
}

type Family2<Parent = Animal2, Child = Animal2> = {
  mother: Parent;
  father: Parent;
  child: Child;
}

type SS = Family2<string, string>;
type TT = Family2;
type U = Family2<string>;
