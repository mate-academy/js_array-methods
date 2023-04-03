'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here

    let result = '';
    let comma = separator;

    if (comma === undefined) {
      comma = ',';
    } else if (comma === null) {
      comma = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += '';
      } else {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += comma;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
