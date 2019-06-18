'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let mutableSeparator = separator;

    if (separator === undefined || separator === false) {
      mutableSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += mutableSeparator;
      } else if (i !== this.length - 1) {
        result += `${this[i]}${mutableSeparator}`;
      } else {
        result += this[i];
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;

// result[result.length] = this[i];
