const path = require('node:path');
const fs = require('node:fs');

exports.getPackageName = () => {
    const packageStr = fs.readFileSync(
        path.resolve(__dirname, '../package.json'),
        { encoding: 'utf-8' }
    );
    const packageJson = JSON.parse(packageStr);
    return packageJson.name;
}
