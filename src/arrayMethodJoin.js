'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorValue = separator;

    if (typeof separator === 'undefined') {
      separatorValue = ',';
    }

    if (separator === null) {
      separatorValue = 'null';
    }

    if (typeof this === 'object' && this.length > 0) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === null) {
          result += separatorValue;
        } else if (this[i] === undefined) {
          result += separatorValue;
        } else {
          result += this[i] + separatorValue;
        }
      }
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
