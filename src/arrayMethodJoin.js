'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringAfterJoin = '';

    if (!this.length) {
      return stringAfterJoin;
    }

    let elementSeparator = separator;

    if (separator === null) {
      elementSeparator = 'null';
    }

    const indexOfLast = this.length - 1;

    for (let i = 0; i < indexOfLast; i++) {
      if (this[i] === undefined || this[i] === null) {
        stringAfterJoin += '' + elementSeparator;
      } else {
        stringAfterJoin += this[i] + elementSeparator;
      }
    }

    stringAfterJoin += this[indexOfLast] !== undefined ? this[indexOfLast] : '';

    return stringAfterJoin;
  };
}

module.exports = applyCustomJoin;
