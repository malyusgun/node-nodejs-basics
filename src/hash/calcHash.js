import { createHash } from 'node:crypto';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const calculateHash = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const filePath = path.join(dirPath, '/files/fileToCalculateHashFor.txt');
    let fileData;
    await fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        fileData = data.toString();
        const hash = createHash('sha256');
        const fileHash = hash.update(fileData);
        const fileHashHex = fileHash.digest('hex');
        console.log('Hash of "fileToCalculateHashFor" file: ', fileHashHex);
    });
};

await calculateHash();