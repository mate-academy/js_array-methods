'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 0) {
      return '';
    }

    this.forEach(el => {
      if (el === null || el === undefined) {
        string += '';
      } else {
        string += el;
      }

      if (el === this[this.length - 1]) {
        return;
      }

      string += separator;
    });

    return string;
  };
}

module.exports = applyCustomJoin;
