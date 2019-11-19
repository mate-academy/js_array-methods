'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let sep = separator;

    if (sep == null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        result += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        result += sep;
      } else {
        result += this[i] + sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
