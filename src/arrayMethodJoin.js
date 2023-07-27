'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arrLength = this.length;
    let result = '';
    let newSeparator = separator;

    if (separator === undefined) {
      newSeparator = ',';
    }

    for (let i = 0; i < arrLength - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '' + `${newSeparator}`;
      } else {
        result += this[i] + `${newSeparator}`;
      }
    }

    if (this[arrLength - 1] === undefined) {
      result += '';
    } else {
      result += this[arrLength - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
