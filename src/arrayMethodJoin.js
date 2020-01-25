'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let customSeparator = separator;

    if (separator === null) {
      customSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this.length === 1 || customSeparator === '') {
        result += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        result += '' + customSeparator;
      } else if (i !== this.length - 1) {
        result += this[i] + customSeparator;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
