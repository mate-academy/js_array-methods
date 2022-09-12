'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let inFunctionSeparator = separator;

    if (separator === null) {
      inFunctionSeparator = 'null';
    } else if (separator === '') {
      inFunctionSeparator = '';
    } else if (!separator) {
      return this.toString();
    };

    inFunctionSeparator.toString();

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += '';
      } else {
        result += this[i];
      };

      if (i !== this.length - 1) {
        result += inFunctionSeparator;
      };
    };

    return result;
  };
}

module.exports = applyCustomJoin;
