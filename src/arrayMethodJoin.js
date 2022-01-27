'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newStep = separator;

    if (separator === null) {
      newStep = 'null';
    }

    if (separator === undefined) {
      newStep = ',';
    }

    if (this.length) {
      for (let arr = 0; arr < this.length - 1; arr++) {
        if (this[arr] === undefined || this[arr] === null) {
          this[arr] = '';
        }

        if (this[this.length - 1] === undefined) {
          this[this.length - 1] = '';
        }

        result += this[arr] + newStep;
      }
      result += this[this.length - 1];
    } else {
      result = '';
    }

    return result;
  };
}

module.exports = applyCustomJoin;
