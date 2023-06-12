'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === null || this[i] === undefined
        ? ''
        : this[i];

      resultString += i === this.length - 1
        ? `${element}`
        : `${element}${separator}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
