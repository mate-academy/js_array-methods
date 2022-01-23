'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let elementSeparator = separator;

    if (separator === null) {
      elementSeparator = 'null';
    }

    let stringAfterJoin = '';
    const indexOfLast = this.length - 1;

    for (let i = 0; i < indexOfLast; i++) {
      if (this[i] === null || this[i] === undefined) {
        stringAfterJoin += '' + elementSeparator;
      } else {
        stringAfterJoin += this[i] + elementSeparator;
      }
    }

    if (this[indexOfLast] === null || this[indexOfLast] === undefined) {
      stringAfterJoin += '';
    } else {
      stringAfterJoin += this[indexOfLast];
    }

    return stringAfterJoin;
  };
}

module.exports = applyCustomJoin;
