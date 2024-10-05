const parseEnv = () => {
    console.log('Env variables:');
    Object.entries(process.env).forEach(([key, value]) => {
        console.log(`RSS_${key}=${value};`);
    })
};

parseEnv();