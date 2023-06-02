'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  const originalJoin = Array.prototype.join;

  [].__proto__.join2 = function(separator) {
    let modifiedSeparator = separator;

    if (modifiedSeparator === undefined) {
      modifiedSeparator = ',';
    } else if (modifiedSeparator === null) {
      modifiedSeparator = 'null';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element === undefined) {
        result += '';
      } else if (element === null || element === '') {
        result += '';
      } else {
        result += element;
      }

      if (i !== this.length - 1) {
        result += modifiedSeparator;
      }
    }

    return result;
  };

  [].__proto__.join = originalJoin;
}

module.exports = applyCustomJoin;
