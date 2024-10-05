import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const read = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const filePath = path.join(dirPath, '/files/fileToRead.txt');

    const readableStream = fs.createReadStream(filePath, {encoding: 'utf8'});

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    readableStream.on('end', () => {
        console.log('\nЧтение файла завершено');
    });
};

await read();