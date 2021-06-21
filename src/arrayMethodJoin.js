'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';
    let unifier = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator === undefined) {
      unifier = ',';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      resultStr += `${this[i]}${unifier}`;
    }
    resultStr += this[this.length - 1];

    return resultStr;
  };
}

module.exports = applyCustomJoin;
