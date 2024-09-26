'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';
    let mySeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        mySeparator = 'null';
      } else if (separator === undefined) {
        mySeparator = ',';
      }

      if (i !== this.length - 1) {
        str = str + this[i] + mySeparator;
      } else {
        str = str + this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
