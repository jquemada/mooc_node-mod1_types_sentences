const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + "/../mooc_node-mod1_types_sentences.zip");
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});
archive.pipe(output);
archive.glob('*', {"ignore": ['node_modules', 'tests', 'README.md']});
archive.finalize();