const { readFile, writeFile, chmod } = require('fs/promises');

const backupFile = `${__filename}-${Date.now()}`;

async function asyncFunction() {
    const data = await readFile(__filename);
    // console.log("start");
    await writeFile(backupFile, data);
    await chmod(backupFile, 0o400); // ReadOnlyにする
    console.log("done");
};

async function main() {
    for (let i=0; i < 10; i++) {
        const flag = await asyncFunction();
        if (flag) {
            break;
        };
    };
};

main()
    .catch((err) => {
        console.error(err);
    }
);

// try, catchも書ける