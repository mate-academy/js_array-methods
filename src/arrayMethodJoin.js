'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let defaultSeparator = separator;

    if (defaultSeparator === undefined) {
      defaultSeparator = ',';
    } else if (defaultSeparator === null) {
      defaultSeparator = 'null';
    } else {
      defaultSeparator.toString();
    }

    for (let index = 0; index < this.length; index++) {
      if (this[index] === null || this[index] === undefined) {
        result += defaultSeparator;
      } else if (index !== this.length - 1) {
        result += this[index] + defaultSeparator;
      } else {
        result += this[index];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
