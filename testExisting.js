// var fs = require('fs');

function shallowProperty(key) {
    return function (obj) {
        return obj == null ? void 0 : obj[key];
    };
}

var getByteLength = shallowProperty('byteLength');


function toDataView(bufferSource) {
    return new DataView(
        bufferSource.buffer || bufferSource,
        bufferSource.byteOffset,
        getByteLength(bufferSource)
    );
}

var isEqualExisting = (a, b) => {
    a = toDataView(a);
    b = toDataView(b);
    var byteLength = getByteLength(a);
    if (byteLength !== getByteLength(b)) return false;
    if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
    while (byteLength--) {
        if (a.getUint8(byteLength) !== b.getUint8(byteLength)) {
            return false;
        }
    }
    return true;
}
// var buffer1 = fs.readFileSync('loremipsum.txt');
// var buffer2 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// var buffer3 = fs.readFileSync('loremipsum2.txt');

var fa = new Float64Array(10000);
fa = fa.map((a, i) => i);
var fa2 = new Float64Array(10000);
fa2 = fa2.map((a, i) => i === 8000 ? 12 : i);

console.time('existing');
console.log(isEqualExisting(fa, fa2));
console.timeEnd('existing');

// console.log(Buffer.from(fa).equals)
// console.log(Object.prototype.toString.call(buffer1.buffer));
// console.log(_.isEqual(buffer1, buffer2));
// console.log(isEqual(buffer1.buffer, buffer2.buffer));
// console.log(isEqual(buffer1.buffer, buffer3.buffer));
// console.log(Object.prototype.toString.call(buffer1), Object.prototype.toString.call(buffer2))
// console.log(typeof buffer1);