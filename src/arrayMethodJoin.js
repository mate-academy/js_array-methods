'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separatorCopy = separator;

    if (separator === null) {
      separatorCopy = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        separatorCopy = '';
      }

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result += (this[i] + separatorCopy);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
