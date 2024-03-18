import fs from 'fs';

const buff = fs.readFileSync("./src/daipresents.txt", { encoding: 'utf8' });
console.log(buff);

const count = ( buff.match( /daipresents/g ) || [] ).length ;
console.log(count);
