'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let validSeparator = separator;

    if (validSeparator === null) {
      validSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let validElement = this[i];

      if (validElement === null || validElement === undefined) {
        validElement = '';
      }

      if (i < this.length - 1) {
        result += validElement + validSeparator;
      } else {
        result += validElement;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
