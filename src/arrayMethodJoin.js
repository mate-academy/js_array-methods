'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i] + `${separator}`;
      }
    }

    const resultWithLastSeperator = result + `${separator}`;

    return resultWithLastSeperator;
  };
}

module.exports = applyCustomJoin;
