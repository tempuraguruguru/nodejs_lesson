const fs = require('node:fs');
const { marked } = require('marked');

exports.readMarkdownFileSync = (filepath) => {
    const markdownStr = fs.readFileSync(
        filepath,
        { encoding: 'utf-8' }
    );
    return markdownStr;
}

exports.writeHTML = (markdownStr, outpath) => {
    const html = marked.parse(markdownStr);
    fs.writeFileSync(outpath, html);
}