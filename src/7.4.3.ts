import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// file:///Users/daipresents/Work/road-to-typescript-pro/dist/7.4.3.js
const fileURL = import.meta.url;
console.log(fileURL);

// /Users/daipresents/Work/road-to-typescript-pro/dist/7.4.3.js
const filePath = fileURLToPath(fileURL);
console.log(filePath);

// /Users/daipresents/Work/road-to-typescript-pro/dist
const dirPath = path.dirname(filePath);
console.log(dirPath);

// /Users/daipresents/Work/road-to-typescript-pro/src/daipresents.txt
const inputPath = path.join(dirPath, '../src/daipresents.txt');
console.log(inputPath);

const buff = readFileSync(inputPath, { encoding: 'utf8' });
console.log(buff);

const count = ( buff.match( /daipresents/g ) || [] ).length ;
console.log(count);
