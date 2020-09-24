'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        string += ',';
        continue;
      }

      if (element === this[this.length - 1]) {
        string += element;
        continue;
      }

      string += element + `${separator}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
