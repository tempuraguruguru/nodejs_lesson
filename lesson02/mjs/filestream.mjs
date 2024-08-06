import { readFile } from 'node:fs'

// import.meta.filenameはESMのみ利用可能
readFile(import.meta.filename, (err, data) => {
    console.log(data);
});