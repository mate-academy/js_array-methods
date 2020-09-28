'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorCopy = separator;

    if (separator === undefined) {
      separatorCopy = ',';
    }

    if (separator === null) {
      separatorCopy = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        result += this[i];
        break;
      }

      if (this[i] === undefined || this[i] === null) {
        result += '' + separatorCopy;
      } else {
        result += this[i] + separatorCopy;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
