'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let newSep;

    if (typeof separator === 'undefined') {
      newSep = ',';
    } else if (separator === null) {
      newSep = 'null';
    } else {
      newSep = separator;
    }

    if (this[0] === null) {
      result = '';
    } else if (this.length > 0) {
      result += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        result += newSep;
      } else {
        result += newSep + this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
