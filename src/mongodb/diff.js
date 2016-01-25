///**
// * @fileOverview コレクションを比較して差分を取る MongoDB 用スクリプト
// */

var srcCollection = '';
var destCollection = '';


var srcDocs = [];
db[srcCollection].find({}).forEach(function(srcDoc) {
    srcDocs.push(srcDoc);
});

var destDocs = [];
db[destCollection].find({}).forEach(function(destDoc) {
    destDocs.push(destDoc);
});

var sub  = function(srcs, dests) {
    return srcs.filter(function(src) {
        return !dests.some(function(dest) {
            return src._id === dest._id;
        });
    });
};

var src_dest = sub(srcDocs, destDocs);
var dest_src = sub(destDocs, srcDocs);

print('only src', src_dest.length)
src_dest.forEach(function(src) {
    printjson(src);
});
print('\n')
print('only dest', dest_src.length)
dest_src.forEach(function(dest) {
    printjson(dest);
});
