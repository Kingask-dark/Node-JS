const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname,'file','egg.txt'),'utf-8');
        console.log(data);
        console.log('\n');
        await fsPromise.unlink(path.join(__dirname,'file','eg.txt'));
        await fsPromise.writeFile(path.join(__dirname,'file','eg1.txt'),data);
        await fsPromise.appendFile(path.join(__dirname,'file','eg1.txt'),'\n\n Hey You added Some Data');
        await fsPromise.rename(path.join(__dirname,'file','eg1.txt'), path.join(__dirname,'file','eggg.txt'));
        const newData = await fsPromise.readFile(path.join(__dirname,'file','eggg.txt'),'utf-8');
        console.log(newData);
    } catch (error) {
        console.error(error);
    }
}

fileOps();