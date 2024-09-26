'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    const delimiter = separator === null ? 'null' : separator.toString();

    for (const item of this) {
      const itemValue = item === undefined || item === null ? '' : item;

      result += itemValue + delimiter;
    }

    result = result.substring(0, result.length - delimiter.length);

    return result;
  };
}

module.exports = applyCustomJoin;
