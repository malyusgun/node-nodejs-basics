import os from 'os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const performCalculations = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirPath = dirname(filename);
    const workerPath = path.join(dirPath, '/worker.js');
    const CPUCores = os.cpus();
    const CPUCoresNumber = CPUCores.length;
    const promises = [];
    const result = [];

    for (let i = 0; i < CPUCoresNumber; i++) {
        promises.push(await new Promise( (resolve, reject) => {
            const worker = new Worker(workerPath);
            worker.postMessage(i + 10);
            worker.on('message', (workerMessage) => {
                result.push({
                    status: 'received',
                    value: workerMessage
                });
                resolve();
            })
            worker.on('error', () => {
                result.push({
                    status: 'error',
                    value: null
                });
                reject();
            })
        }));
    }
    Promise.all(promises).then(() => console.log('Result: ', result));
};

await performCalculations();