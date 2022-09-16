'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separatorChar = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedString = '';
    let separator = separatorChar;

    if (separatorChar === null) {
      separator = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      let currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        currentElement = '';
      }

      joinedString += currentElement + separator;
    }

    if (this[this.length - 1]) {
      joinedString += this[this.length - 1];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
