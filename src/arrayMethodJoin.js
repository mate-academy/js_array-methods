'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let joinedString = '';
    const emptyElement = '';

    if (separator === null) {
      sep = 'null';
    }

    for (let index = 0; index < this.length - 1; index++) {
      if (
        this[index] === null
        || this[index] === undefined
      ) {
        joinedString += emptyElement + sep;
        continue;
      }

      joinedString += this[index] + sep;
    }

    if (
      this[this.length - 1] === null
      || this[this.length - 1] === undefined
    ) {
      joinedString += emptyElement;
    } else {
      joinedString += this[this.length - 1];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
