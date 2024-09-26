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

    for (let i = 0; i < this.length - 1; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        result += separatorCopy;
      } else {
        result += this[i] + separatorCopy;
      }
    }

    if ((this[this.length - 1] !== null)
      && (this[this.length - 1] !== undefined)) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
