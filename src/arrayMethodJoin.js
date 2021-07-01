'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this === undefined || this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return `${this[0]}`;
    }

    let emptyString = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null || this[i] === []) {
        emptyString += '' + `${separator}`;
      } else {
        emptyString += this[i] + `${separator}`;
      }
    }

    emptyString += this[this.length - 1];

    return emptyString;
  };
}

module.exports = applyCustomJoin;
