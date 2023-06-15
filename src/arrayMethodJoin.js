'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length < 1) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        i === 0 ? result += '' : result += `${separator}`;
      } else {
        i === 0 ? result += `${this[i]}` : result += `${separator}${this[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
