const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'file','Hacking.txt'), {encoding: 'utf-8'});
const ws = fs.createWriteStream(path.join(__dirname,'file','NewHacking.txt'));

// rs.on('data',(dataChunk) => {
//     ws.write(dataChunk);
// });

rs.pipe(ws); // pipe will do exactly same thing as above commented program.
