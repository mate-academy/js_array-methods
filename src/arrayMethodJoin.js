'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const isLast = i === this.length - 1;
      const isUndefined = this[i] === undefined;
      const lastAnduUdefined = isUndefined && isLast;
      const undefinedOrNull = isUndefined || this[i] === null;

      if (lastAnduUdefined) {
        continue;
      }

      if (undefinedOrNull) {
        result += separator;
        continue;
      }

      if (isLast) {
        result += this[i];
      } else {
        result += this[i] + String(separator);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
