import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, '../src/daipresents.txt');

const sleep = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

const errorAfter1ms = async () => {
  await sleep(1);
  throw new Error('timeout');
}

const data = await Promise.race([
  readFile(dataFile, { encoding: 'utf8' }),
  errorAfter1ms(),
]).catch(() => {
  console.log('error. timeout.');
  process.exit();
});

const count = ( data.match( /daipresents/g ) || [] ).length ;
console.log(count);
