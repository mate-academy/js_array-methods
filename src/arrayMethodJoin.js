'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';
    let separatorCopy = '';

    if (separator === null) {
      separatorCopy += 'null';
    } else {
      separatorCopy += separator;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i] + separatorCopy;
      } else {
        result += separatorCopy;
      }
    }
    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
