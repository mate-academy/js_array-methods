'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return str;
    }

    for (let i = 0; i < this.length; i++) {
      const expression = (this[i] === null || this[i] === undefined)
        ? ''
        : this[i];

      if (i !== this.length - 1) {
        str += (expression + separator);
      } else {
        str += expression;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
