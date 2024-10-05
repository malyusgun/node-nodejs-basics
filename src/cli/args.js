const parseArgs = () => {
    console.log('Command line arguments:');

    let line = '';
    let currentPart = '';
    let lastArgNameIndex = -2;

    process.argv.forEach((arg, index) => {
        if (arg.startsWith('--')) {
            currentPart = `, ${arg}`;
            lastArgNameIndex = index;
        } else if (index === lastArgNameIndex + 1) {
            currentPart += ` is ${arg}`;
            line += currentPart;
        }
    });

    line = line.slice(2);
    console.log(line);
};

parseArgs();