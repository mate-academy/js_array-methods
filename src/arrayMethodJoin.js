'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSeparator = separator;

    if (this === undefined || this.length === 0) {
      return result;
    }

    if (separator === undefined) {
      newSeparator = ',';
    }

    if (separator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += newSeparator;
      } else {
        result += this[i] + newSeparator;
      }
    }

    if (this[this.length - 1] === undefined) {
      return result;
    }

    return result + this[this.length - 1];
  };

  [].__proto__.join2('-');
}

applyCustomJoin();

module.exports = applyCustomJoin;
