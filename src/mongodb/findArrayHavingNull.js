///**
// * @fileOverview 配列の要素が一つで null だけのデータを検出する MongoDB 2.2.6 用スクリプト
// */

var isArrayHavingOneNull = function(document) {
    if (Array.isArray(document)) {
        return document.length === 1 && document[0] === null;
    } else if (typeof document === 'object') {
        for (var key in document) {
            if (isArrayHavingOneNull(document[key])) {
                return true;
            }
        }
        return false;
    }
    return false; // boolean or number or string or function
};

db.getCollectionNames().forEach(function(collectionName) {
        db[collectionName].find({}).forEach(function(document) {
            if (isArrayHavingOneNull(document)) {
                printjson(document);
            }
    });
});
