type CSVUser = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
uhyo,20,1
John Smith,17,0
Mary Sue,14,1
`;

const lines: string[] = data.split(/\n/);
console.log(lines);

const users: CSVUser[] = [];

for(const line of lines) {
  if (line === '') {
    continue;
  }
  const userArray: string[] = line.split(',');
  users.push({
    name: userArray[0],
    age: Number(userArray[1]),
    premiumUser: Number(userArray[2])? true : false,
  });
}

console.log(users);

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザです。`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザではありません。`);
  }
}