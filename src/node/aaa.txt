/**
 * @fileOverview
 */
var fs = require('fs');

var srcPath = process.argv[2];
var destPath = process.argv[3];

var src = fs.createReadStream(srcPath);
var dest = fs.createWriteStream(destPath);

src.pipe(dest);

src.on('end', function() {
    console.log('end');
});
