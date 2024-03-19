import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, '../src/daipresents.txt');

readFile(dataFile, { encoding: 'utf8' })
  .then(data => {
    const count = ( data.match( /daipresents/g ) || [] ).length ;
    console.log(count);
  });

const data = await readFile(dataFile, { encoding: 'utf8' });
const count = ( data.match( /daipresents/g ) || [] ).length ;
console.log(count);
