'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(symbol) {
    let length = this.length;
    let result = length
      ? `${this[0]}`
      : '';

    let joiner = symbol !== undefined
      ? `${symbol}`
      : ',';

    for (let i = 1; i < length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        result += joiner;
      } else {
        result += `${joiner}${this[i]}`;
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
