EasterJS
========

EasterJS is trivial JavaScript module containing a function to get the date
of Easter Sunday. It uses the [Anonymous Gregorian algorithm][1] to calculate
the date.

The minified size of the module is only 338 bytes.

[1]: https://en.wikipedia.org/wiki/Computus#Anonymous_Gregorian_algorithm

Usage
-----

The module can be used from Node or the browser. You pass a
number - the year - to the `easter` function and it returns a `Date`
object representing the date of Easter Sunday for that year.

### Node

```javascript
const easter = require('easter.min');
console.log(easter(1970));
```

### Browser

Just use a `<script>` tag to include the `easter.js` or `easter.min.js`,
and then call `easter`, passing the year.

Tests
-----

### Node

Included is a simple test program that uses Easter dates I found on
the Internet to verify the correct dates are returned. To run the
script using Node, run `node test.js` in the source directory. There's
also an NPM script in the `package.json` called `test` which runs
the minifier before running the test.

### Browser

Also included is a silly little web page that lets you manually enter
years using a form input and it outputs the date in a paragraph tag.
To use it, open the `index.html` file in your browser and change
the input field value.

Rebuilding the Minified version
-------------------------------

There's a `minify` NPM script in the `package.json` file you can use
to re-minify the `easter.js` file, simply run `npm run minify`.
