'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let output = '';

    let actualSeparator;

    if (separator === undefined) {
      actualSeparator = ',';
    } else {
      actualSeparator = separator;
    }

    if (this.length === 0) {
      return output;
    }

    if (this[0] !== undefined && this[0] !== null) {
      output += `${this[0]}`;
    } else {
      output += '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        output += `${actualSeparator}${this[i]}`;
      } else {
        output += actualSeparator;
      }
    }

    return output;
  };
};

module.exports = applyCustomJoin;
