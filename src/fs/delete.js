import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const remove = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const filePath = path.join(dirPath, '/files/fileToRemove.txt');

    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) console.error(err);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await remove();