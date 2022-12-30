'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let correctSeparator = separator;
    let str = String(this[0]);

    if (separator === null) {
      correctSeparator = 'null';
    }

    if (this.length === 0) {
      return '';
    }

    if (str === 'null') {
      str = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += correctSeparator;
      } else {
        str += correctSeparator + this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
