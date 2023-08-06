'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    this.forEach((item, index) => {
      const isLastItem = index < this.length - 1;
      const value = item !== undefined && item !== null ? item : '';

      result += isLastItem ? `${value}${separator}` : `${value}`;
    });

    return result;
  };
}

module.exports = applyCustomJoin;
