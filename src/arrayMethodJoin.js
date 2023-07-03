'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
      }

      if (i < this.length - 1) {
        result += `${item}${separator}`;
      } else {
        result += `${item}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
