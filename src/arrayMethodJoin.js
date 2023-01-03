'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case undefined:
          string += separator;
          break;
        case null:
          string += separator;
          break;
        default:
          string += this[i] + `${separator}`;
      }
    }

    const lastSeparator = string.lastIndexOf(separator);

    return string.slice(0, lastSeparator);
  };
}

module.exports = applyCustomJoin;
