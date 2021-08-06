'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        string += separator;
        continue;
      }

      string += element;

      if (this.indexOf(element) !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
