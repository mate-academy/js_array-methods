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

    for (let index = 0; index < this.length; index++) {
      if (separator === '' || index === this.length - 1) {
        result += String(this[index]);
      } else if (this[index] === null || this[index] === undefined) {
        result += separator;
      } else {
        result += String(this[index]) + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
