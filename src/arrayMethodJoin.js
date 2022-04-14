'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    let joinChars = separator;

    if (separator === null) {
      joinChars = 'null';
    }

    if (!this.length) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (!(this[i] === null) && !(this[i] === undefined)) {
        result += this[i];
      }

      if (!(i === this.length - 1)) {
        result += joinChars;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
