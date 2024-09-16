'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const items = this;
    let result = '';

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item === undefined || item === null) {
        result += separator;
      } else if (item === items[items.length - 1]) {
        result += item;
      } else {
        result += '' + item + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
