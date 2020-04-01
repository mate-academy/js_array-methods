'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator) {
    let result = '';

    if (separator === undefined) {
      separator = ',';
    } else if (separator === null) {
      separator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      (i === this.length - 1) ? result += this[i] : result += this[i] + separator;

    }
    return result;
  };
}

module.exports = applyCustomJoin;
