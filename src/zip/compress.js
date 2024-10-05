import zlib from 'zlib';
import fs from 'fs';
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const compress = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const inputPath = path.join(dirPath, '/files/fileToCompress.txt');
    const outputPath = path.join(dirPath, './files/archive.gz');

    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();