'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    const separate = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === null || this[i] === undefined
        ? ''
        : this[i];

      i === this.length - 1
        ? resultString += element
        : resultString += element + separate;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
