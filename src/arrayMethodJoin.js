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

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        result += separator;
        continue;
      }

      if (i !== this.length - 1) {
        result += this[i].toString() + separator;
      } else {
        result += this[i].toString();
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
