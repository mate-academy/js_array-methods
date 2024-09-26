'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';
    let sep = separator;

    if (this === []) {
      return string;
    };

    if (separator === null) {
      sep = 'null';
    };

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      if (i === this.length - 1) {
        string += this[i];
        break;
      }
      string += this[i] + sep;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
