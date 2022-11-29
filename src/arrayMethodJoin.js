'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += this[i] !== null && this[i] !== undefined
        ? this[i].toString() + separator
        : '' + separator;
    }

    switch (true) {
      case `${separator}`.length >= 1:
        return result.slice(0, -`${separator}`.length);
      default:
        return result;
    }
  };
}

module.exports = applyCustomJoin;
