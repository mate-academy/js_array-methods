'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorCopy = separator;

    for (let element = 0; element < this.length; element++) {
      if (this[element] === null || this[element] === undefined) {
        result += '';
      } else {
        result += this[element];
      }

      if (separatorCopy === undefined) {
        separatorCopy = ',';
      }

      if (element < this.length - 1) {
        result += separatorCopy;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
