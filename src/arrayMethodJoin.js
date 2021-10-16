'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    const undefinedOrNull = el => el === undefined || el === null;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && undefinedOrNull(this[i])) {
        break;
      }

      if (i === this.length - 1) {
        result += `${this[i]}`;
        break;
      }

      if (undefinedOrNull(this[i])) {
        result += separator;
        continue;
      }

      result += `${this[i]}` + separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
