'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = this;
    const length = this.length;
    const innerSeparator = `${separator}`;
    let result = '';

    for (let i = 0; i < length; i++) {
      if (i !== length - 1 && (arr[i] === undefined || arr[i] === null)) {
        result += innerSeparator;
        continue;
      }

      if (arr[i] === undefined || arr[i] === null) {
        result += innerSeparator;
        continue;
      }

      if (i === length - 1) {
        result += arr[i];
        continue;
      };

      result += arr[i] + innerSeparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
