'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const item of this) {
      if (item !== null && item !== undefined && item !== '') {
        string += `${item}`;
      }

      if (this.indexOf(item) !== this.length - 1) {
        string += `${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
