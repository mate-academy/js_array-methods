'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let temp = this[i];

      if (this[i] === undefined || this[i] === null) {
        temp = '';
      }

      if (i === this.length - 1) {
        result += temp;
        break;
      }

      result += temp + `${separator}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
