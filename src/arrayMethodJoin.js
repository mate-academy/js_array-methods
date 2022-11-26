'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastItem = this[this.length - 1];
    let result = '';

    for (let index = 0; index < this.length - 1; ++index) {
      const isNull = this[index] === null;
      const isUndefined = this[index] === undefined;

      if (isNull || isUndefined) {
        result += String(separator);
        continue;
      }

      result += this[index] + String(separator);
    }

    if (lastItem) {
      result += lastItem;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
