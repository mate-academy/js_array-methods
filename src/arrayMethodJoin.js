'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length < 1) {
      return '';
    } else if (this[0] !== null && this[0] !== undefined) {
      result += this[0];
    };

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += `${separator}` + '';
        continue;
      };
      result += `${separator}` + this[i];
    };

    return result;
  };
}

module.exports = applyCustomJoin;
