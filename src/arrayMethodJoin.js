'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let element;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        element = '';
      } else {
        element = this[i];
      }

      result += element;

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
