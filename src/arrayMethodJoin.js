'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const items = this;
    let result = '';

    for (let i = 0; i < items.length; i++) {
      if (items[i] === undefined || items[i] === null) {
        items[i] = '';
      }

      if (i === items.length - 1) {
        result += items[i];

        return result;
      }

      result += '' + items[i] + separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
