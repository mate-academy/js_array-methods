'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      let currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        currentElement = '';
      }

      result += currentElement;

      result += separator;
    }

    if (this.length === 1) {
      result += this[0];
    }

    if (this[this[this.length - 1]]) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
