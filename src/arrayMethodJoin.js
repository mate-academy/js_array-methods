'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let delim = separator;
    let resString = '';

    if (delim === null) {
      delim = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      const value = (this[i] !== null && this[i] !== undefined) ? this[i] : '';

      if (i !== this.length - 1) {
        resString += value + delim;
      } else {
        resString += value;
      }
    }

    return resString;
  };
}

module.exports = applyCustomJoin;
