'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [this].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separator;
      } else {
        result += this[i];
        result += separator;
      }
    }

    if (separator === '') {
      return (result);
    }

    if (separator === null) {
      return (result.slice(0, -4));
    }

    return result.slice(0, -separator.toString().length);
  };
}

module.exports = applyCustomJoin;
