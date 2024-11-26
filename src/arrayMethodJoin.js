'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const innerSeparator = separator + '';

    if (!this.length) {
      return result;
    }

    for (let i = 0; i < this.length - 1; i += 1) {
      result += (this[i] === null || this[i] === undefined)
        ? innerSeparator
        : this[i] + innerSeparator;
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
