'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const i of this) {
      if (i !== null && i !== undefined && i !== '') {
        string += `${i}`;
      }

      if (this.indexOf(i) !== this.length - 1) {
        string += `${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
