'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let currentSeparator = separator;

    if (separator === undefined) {
      currentSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];

      if (currentElement === undefined && i === this.length - 1) {
        break;
      }

      if (currentElement === null || currentElement === undefined) {
        result += currentSeparator;
        continue;
      }

      if (i === this.length - 1) {
        result += currentElement;
        break;
      }

      result += `${currentElement}` + `${currentSeparator}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
