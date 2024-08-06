const fs = require('node:fs');

// __filenameはCommonJSのみ利用可能
fs.readFile(__filename, (err, data) => {
    console.log(data);
});