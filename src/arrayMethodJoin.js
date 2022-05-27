'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let copySeparator = separator;
    let firstElement = this[0];

    if (separator === null) {
      copySeparator = 'null';
    }

    if (firstElement === null) {
      firstElement = '';
    }

    let str = '' + firstElement;

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (isNaN(this[i]) && this[i] !== 'null') {
        this[i] = 'NaN';
      }

      str += copySeparator + this[i];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
