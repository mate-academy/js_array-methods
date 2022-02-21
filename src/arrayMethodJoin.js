'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      let currentItem = this[i];

      if (currentItem === null || typeof currentItem === 'undefined') {
        currentItem = '';
      }

      result += currentItem;

      if (i === this.length - 1) {
        continue;
      }

      result += separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
