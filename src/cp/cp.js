import { spawn } from 'node:child_process';
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const spawnChildProcess = async (args) => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const srcPath = path.join(dirPath, '/files/script.js');
    const child = spawn('node', [srcPath, ...args]);

    child.stdout.on('data', (data) => {
        console.log(`Output:\n ${data}`);
    });
};

spawnChildProcess( ['foo', 'bar']);
