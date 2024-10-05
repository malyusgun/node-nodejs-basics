import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const create = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const filePath = path.join(dirPath, '/files/fresh.txt');

    if (!fs.existsSync(filePath)) {
        fs.writeFile(filePath, 'I am fresh and young', (err) => {
            if (err) console.error(err);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await create();