const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'file', 'eg.txt'), 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

console.log("Hello.....");

fs.writeFile(path.join(__dirname, 'file', 'eg1.txt'), "You Just Created a file and Write some Data", (err) => {
    if (err) {
        throw err;
    }
    console.log('Write Completed');

    fs.appendFile(path.join(__dirname, 'file', 'eg1.txt'), " \n\n You Just Modify a file and Added some Data", (err) => {
        if (err) {
            throw err;
        }
        console.log('Append Completed');

        fs.rename(path.join(__dirname, 'file', 'eg1.txt'), path.join(__dirname, 'file', 'egg.txt'), (err) => {
            if (err) {
                throw err;
            }
            console.log('Rename Completed');
        });
    });
});

fs.appendFile(path.join(__dirname, 'file', 'eg2.txt'), "You Just Created a file and Write some Data", (err) => {
    if (err) {
        throw err;
    }
    console.log('Append Completed');
});


process.on('uncaughtException', err => {
    console.error(`There is an uncought error: ${err}`);
    process.exit(1);
})