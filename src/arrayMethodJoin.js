'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lastElement = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      let currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        currentElement = '';
      }

      joinedString += `${currentElement}${separator}`;
    }

    if (lastElement !== undefined) {
      joinedString += lastElement;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
