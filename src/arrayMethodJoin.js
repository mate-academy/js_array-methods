'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinResult = '';
    let join = separator;

    if (this.length === 0) {
      return '';
    }

    if (join === null) {
      join = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      joinResult += this[i] + join;
    }

    joinResult += this[this.length - 1];

    return joinResult;
  };
}

module.exports = applyCustomJoin;
