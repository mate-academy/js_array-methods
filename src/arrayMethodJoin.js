'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let lastElement = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      const element = this[i];

      if (element === null || element === undefined) {
        string += separator;
        continue;
      }
      string += String(element) + separator;
    }

    if (lastElement === undefined || lastElement === null) {
      lastElement = '';
    }

    return string + lastElement;
  };
}

module.exports = applyCustomJoin;
