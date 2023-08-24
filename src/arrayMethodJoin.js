'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        if (i !== this.length - 1) {
          result += separator;
        }
      }

      if (currentElement !== null && currentElement !== undefined) {
        if (i !== this.length - 1) {
          result += currentElement;
          result += separator;
        }

        if (i === this.length - 1) {
          result += currentElement;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
