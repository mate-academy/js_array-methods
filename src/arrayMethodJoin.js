'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(delimiter) {
    let joinedItem = '';
    let separator = delimiter;

    if (this.length === 0) {
      return '';
    }

    if (separator === undefined) {
      separator = ',';
    } else if (separator === null) {
      separator = 'null';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedItem += this[i];
      }

      if (i !== this.length - 1) {
        joinedItem += separator;
      }
    }

    return joinedItem;
  };
}

module.exports = applyCustomJoin;
