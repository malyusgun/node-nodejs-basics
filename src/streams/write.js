import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const write = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const filePath = path.join(dirPath, '/files/fileToWrite.txt');

    const writableStream = fs.createWriteStream(filePath, {encoding: 'utf8'});

    process.stdin.on("data", data => {
        writableStream.write(data);
    })
    // Input something to console, press Enter and look at content in fileToWrite.txt
};

await write();