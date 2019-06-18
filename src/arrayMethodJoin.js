'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let customSeparator = separator;
    if (separator === undefined) {
      customSeparator = ',';
    }
    if (this.length < 1) {
      return '';
    }
    if (this[0] !== null || this[0] !== undefined) {
      result += this[0];
    }
    for (let i = 1; i < this.length; i++) {
      if (
        this[i] === null
        || this[i] === undefined
        || this[i].length < 1
      ) {
        result += `${customSeparator}` + '';
        continue;
      }
      result += `${customSeparator}` + this[i];
    }
    return result;
  };
}

module.exports = applyCustomJoin;
