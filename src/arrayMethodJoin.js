'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let argPlaceholder = separator;

    if (separator === undefined) {
      argPlaceholder = ',';
    } else if (separator === null) {
      argPlaceholder = 'null';
    } else if (typeof separator === 'object') {
      argPlaceholder = separator.toString();
    }

    if (argPlaceholder === '') {
      for (let i = 0; i < this.length; i++) {
        result += this[i];
      }

      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += argPlaceholder;
      } else {
        result += this[i] + argPlaceholder;
      }
    }

    return result.slice(0, -argPlaceholder.length);
  };
};
module.exports = applyCustomJoin;
