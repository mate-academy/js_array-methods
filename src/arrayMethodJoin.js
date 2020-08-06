'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = `${this[0]}`;

    if (this[0] === null) {
      result = '';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i < this.length; i++) {
      if (separator === undefined) {
        result = result + ',' + this[i];
        continue;
      }

      if ((this[i] === undefined) || (this[i] === null)) {
        result = result + ',' + '';
        continue;
      }

      result = result + separator + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
