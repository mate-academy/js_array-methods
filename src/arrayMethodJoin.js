'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let innerSeparator;

    if (!this.length) {
      return result;
    }

    if (separator === undefined) {
      innerSeparator = ',';
    } else if (separator === null) {
      innerSeparator = 'null';
    } else {
      innerSeparator = separator;
    }

    for (let i = 0; i < this.length - 1; ++i) {
      result += (this[i] === null || this[i] === undefined)
        ? innerSeparator
        : this[i] + innerSeparator;
    }
    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
