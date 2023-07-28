'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (separator === null) {
        result += this[i] + 'null';
      } else if (this[i] === null || this[i] === undefined) {
        result += ',';
      } else {
        result += this[i] + separator;
      }
    }

    if (this[this.length - 1] === undefined) {
      return result;
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
