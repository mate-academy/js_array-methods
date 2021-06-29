'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArr = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      joinedArr += `${this[i]}` + separator;
    }

    joinedArr += `${this[this.length - 1]}`;

    return joinedArr;
  };
}

module.exports = applyCustomJoin;
