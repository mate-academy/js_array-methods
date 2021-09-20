'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      // if (this[i] !== null || this[i] !== undefined) {
      //   result += this[i];
      // } else {
      //   continue;
      // }

      if (Object.is(this[i], null) || Object.is(this[i], undefined)) {
        result += '';
      } else {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
