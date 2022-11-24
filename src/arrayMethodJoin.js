'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let sep;

    // in case the passed separator is null
    if (separator === null) {
      sep = 'null';
    } else {
      sep = separator;
    }

    // joining the array excluding the last element
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] != null) {
        result += this[i];
      }
      result += sep;
    }

    // adding the last element
    if (this[this.length - 1] != null) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
