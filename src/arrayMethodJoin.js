'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinWord = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        joinWord += separator;
      }

      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      joinWord += this[i];
    }

    return joinWord;
  };
}

module.exports = applyCustomJoin;
