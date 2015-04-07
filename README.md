parse-stl
=========
### STL (ASCII and binary) file parser

Parses an [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29) (STereoLithography) ASCII or binary buffer to a mesh compatible with [simplicial-complex*](https://github.com/mikolalysenko/simplicial-complex). If you're looking for a streaming parser check [this](https://github.com/tmpvar/stl).

This module works well with [merge-vertices](https://github.com/thibauts/merge-vertices) to deduplicate identical vertices from different faces.

\* ASCII files having faces with more than 3 vertices will have to be triangulated for use with [simplicial-complex](https://github.com/mikolalysenko/simplicial-complex). One option is using [earcut](https://github.com/mapbox/earcut).

Install
-------

```bash
$ npm install parse-stl
```

Usage
-----

```javascript
var parseSTL = require('parse-stl');
var fs = require('fs');

var buf = fs.readFileSync('mesh.stl');
var mesh = parseSTL(buf);

console.log(mesh);
/*
{
  positions: [...],
  cells: [...],
  faceNormals: [...]
}
*/
```