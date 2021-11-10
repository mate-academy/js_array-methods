'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let workSep = separator;

    if (workSep === null) {
      workSep = 'null';
    }

    if (this.length) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }

        if (i === this.length - 1) {
          return joinedString + this[i];
        }

        joinedString += this[i] + workSep;
      }

      return joinedString;
    }

    return '';
  };
}

module.exports = applyCustomJoin;
