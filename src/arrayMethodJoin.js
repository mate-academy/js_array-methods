'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let yy = separator;

    for (const char of this) {
      if (char === null || char === undefined) {
        str += ',';
      } else if (this[this.length - 1] === char) {
        str += char;
      } else {
        if (yy === null) {
          yy = 'null';
        }
        str += char + yy;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
