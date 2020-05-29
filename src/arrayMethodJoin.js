'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const getItem = (item) => item === null || item === undefined ? '' : item;

    let resultString = getItem(this[0]);

    for (let i = 1; i < this.length; i++) {
      const item = getItem(this[i]);

      resultString += `${separator}${item}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
