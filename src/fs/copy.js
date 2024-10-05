import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const copy = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const srcPath = path.join(dirPath, '/files');
    const destinationPath = path.join(dirPath, '/files_copy');

    if (fs.existsSync(srcPath) && !fs.existsSync(destinationPath)) {
        fs.cp(srcPath, destinationPath, { recursive: true }, (err) => {
            if (err) console.error(err);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await copy();
