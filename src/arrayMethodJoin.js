'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let joinedExpression = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedExpression += separator;
        continue;
      }
      joinedExpression += this[i];
      joinedExpression += separator;
    }

    if (this[this.length - 1] !== undefined) {
      joinedExpression += this[this.length - 1];
    }

    return joinedExpression;
  };
}

module.exports = applyCustomJoin;
