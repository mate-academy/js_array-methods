'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringSeparator = separator;
    let result = '';

    if (stringSeparator === null || typeof stringSeparator === 'object') {
      stringSeparator = String(stringSeparator);
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += stringSeparator;
      }

      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      result += element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
