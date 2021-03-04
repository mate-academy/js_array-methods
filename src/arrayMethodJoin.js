'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    if (this[0] === null) {
      this[0] = '';
    }

    let result = this[0];

    for (let i = 1; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        result += separator + '';
      } else {
        result += separator + this[i].toString();
      }
    }

    return result.toString();
  };
}

module.exports = applyCustomJoin;
