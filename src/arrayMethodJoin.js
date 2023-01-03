'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    // if (this.length === 0) {
    //   return '';
    // }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      const validation = this[i] === undefined
      || this[i] === null || this[i] === '';

      const addValue = validation ? '' : this[i];

      string += i === this.length - 1 ? addValue : addValue + String(separator);
    }

    return string;
  };
}

module.exports = applyCustomJoin;
