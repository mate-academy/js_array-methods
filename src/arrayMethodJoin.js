'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '' + this[0];
    const correctValue = '' + separator;
    if (!this.length || this[0] === null || this[0] === undefined) {
      result = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (!this[i] && typeof this[i] !== 'number') {
        result += correctValue;
      } else {
        result += correctValue + this[i];
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
