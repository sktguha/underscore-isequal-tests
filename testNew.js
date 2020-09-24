// var fs = require('fs');

var root = global;
// Get Buffer.from function, if present(usually in node.js environment)
function getBufferFromIfPresent() {
    return root.Buffer && root.Buffer.from && root.Buffer.from.bind(root.Buffer);
}
var bufferFrom = getBufferFromIfPresent();
var isEqualNew = (a, b) => bufferFrom(a, 0).equals(bufferFrom(b, 0));
// var buffer1 = fs.readFileSync('loremipsum.txt');
// var buffer2 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// var buffer3 = fs.readFileSync('loremipsum.txt');

var fa = new Float64Array(10000);
fa = fa.map((a, i) => i);
var fa2 = new Float64Array(10000);
fa2 = fa2.map((a, i) => i === 8000 ? 12 : i);

console.time('new');
console.log(isEqualNew(fa, fa2));
console.timeEnd('new');


// console.log(Buffer.from(fa).equals)
// console.log(Object.prototype.toString.call(buffer1.buffer));
// console.log(_.isEqual(buffer1, buffer2));
// console.log(isEqual(buffer1.buffer, buffer2.buffer));
// console.log(isEqual(buffer1.buffer, buffer3.buffer));
// console.log(Object.prototype.toString.call(buffer1), Object.prototype.toString.call(buffer2))
// console.log(typeof buffer1);