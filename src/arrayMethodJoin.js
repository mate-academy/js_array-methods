'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // eslint-disable-next-line no-unused-vars
    let result = '';

    if (!separator && separator !== ' '
      && separator !== '' && separator !== null) {
      for (const element of this) {
        if (element === this[this.length - 1]) {
          result += element;
        } else {
          result += element + ',';
        }
      }
    } else if (separator === null || separator.toString().length >= 0) {
      for (const element of this) {
        if (element === this[this.length - 1]) {
          result += element;
        } else if (element === null || element === undefined) {
          result += String(separator);
        } else {
          result += element + String(separator);
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
