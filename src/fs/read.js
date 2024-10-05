import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const read = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const filePath = path.join(dirPath, '/files/fileToRead.txt');

    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Content of "fileToRead" file: \n', data.toString());
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await read();