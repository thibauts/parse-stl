var parseASCII  = require('parse-stl-ascii');
var parseBinary = require('parse-stl-binary');

function parse(buf) {
  if(typeof buf === 'string') {
    return parseASCII(buf);
  }

  var triangleCount = buf.readUInt32LE(80);
  var expectedSize = 80 + 4 + triangleCount * ((4 * 3) * 4 + 2);

  if(expectedSize === buf.length) {
    return parseBinary(buf);
  }

  return parseASCII(buf);
}

module.exports = parse;