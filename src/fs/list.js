import fs from 'fs';
import { fileURLToPath } from "url";
import path, { dirname } from 'path';

const list = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const folderPath = path.join(dirPath, '/files');

    if (fs.existsSync(folderPath)) {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            const filesList = [];
            files.forEach(file => filesList.push(path.basename(file)));
            console.log('List of files in "files" folder: \n',filesList);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await list();