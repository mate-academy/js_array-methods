'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let innerSeparator = separator;

    if (this.length === 0) {
      return result;
    }

    if (!innerSeparator && innerSeparator !== '' && innerSeparator !== null) {
      innerSeparator = ',';
    } else if (innerSeparator === null) {
      innerSeparator = 'null';
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
