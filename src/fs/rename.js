import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const rename = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const srcPath = path.join(dirPath, '/files/wrongFilename.txt');
    const destinationPath = path.join(dirPath, '/files/properFilename.md');

    if (fs.existsSync(srcPath) && !fs.existsSync(destinationPath)) {
        fs.rename(srcPath, destinationPath, (err) => {
            if (err) console.error(err);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();