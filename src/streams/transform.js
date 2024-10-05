import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedCommand = chunk.toString().split('').reverse().join('');
            callback(null, reversedCommand);
        }
    });
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
    // Input something to console, press Enter and compare your text with output text below
};

await transform();