'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
    }

    let result = this[0];

    let separator1 = '';

    if (separator) {
      separator1 = separator.toString();
    } else if (separator === null) {
      separator1 = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      result = result + separator1 + this[i + 1];
    }

    const result1 = result.toString();

    return result1;

    // write code here
  };
}

module.exports = applyCustomJoin;
