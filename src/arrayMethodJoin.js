'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    const separate = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === null || this[i] === undefined
        ? ''
        : this[i];

      i === this.length - 1
        ? result += element
        : result += element + separate;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
